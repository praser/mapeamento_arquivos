using CsvHelper;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.IO;
using ZetaLongPaths;

namespace file_mapper
{
    class Program
    {
        static List<FileInfo> files;
        static List<FileInfoError> errors;

        static void Main(string[] args)
        {
            List<string> paths = ProcessShares(args[0]);

             files = new List<FileInfo>();
            errors = new List<FileInfoError>();

            foreach (string path in paths)
            {
                if(File.Exists(path))
                {
                    ProcessFile(path);
                }
                else if (Directory.Exists(path))
                {
                    ProcessDirectory(path);
                }
                else
                {
                    Console.WriteLine("'{0}' is not a valid file or directory.", path);
                }
            }

            string ts = DateTime.Now.ToString("yyyyMMddHHmmssffff");

            try
            {
                FileInfo.writeToCSV(files, "./" + ts + "_arquivos.csv");
                FileInfoError.writeToCSV(errors, "./" + ts + "_erros.csv");
            }
            catch (Exception ex)
            {
                exceptionHandler(ex);
            }
            
        }

        static List<string> ProcessShares(string shareFile)
        {
            List<string> paths = new List<string>();
            foreach (string line in File.ReadLines(shareFile))
            {
                Match match = Regex.Match(line, @"[A-Za-z]:\\(?:\S|\s(?!\s))*");
                paths.Add(match.Value.ToString().Trim());
            }

            return paths;
        }

        static void ProcessDirectory(string targetDirectory)
        {
            ZlpDirectoryInfo zlpDirectoryInfo = new ZlpDirectoryInfo(targetDirectory);
            ZlpFileInfo[] fileEntries = zlpDirectoryInfo.GetFiles();
            foreach (ZlpFileInfo filename in fileEntries)
                ProcessFile(filename.ToString());

            ZlpDirectoryInfo[] subdirectoryEntries = zlpDirectoryInfo.GetDirectories();
            foreach (ZlpDirectoryInfo subdirectory in subdirectoryEntries)
                ProcessDirectory(subdirectory.ToString());       
        }

        static void ProcessFile(string filepath)
        {
            ZlpFileInfo fileInfo = new ZlpFileInfo(filepath);
            try
            {
                files.Add(new FileInfo
                {
                    fullName = fileInfo.FullName,
                    directory = fileInfo.Directory.ToString(),
                    name = fileInfo.Name,
                    extension = fileInfo.Extension,
                    length = fileInfo.Length,
                    creationTime = fileInfo.CreationTime,
                    lastAccessTime = fileInfo.LastAccessTime,
                    lastWriteTime = fileInfo.LastWriteTime,
                    lastOccurrenceTime = new DateTime(),
                    checksum = fileInfo.MD5Hash,
                });

                // Console.WriteLine("[SUCESSO]: '{0}'", filepath);
            }
            catch (Exception ex)
            {
                errors.Add(new FileInfoError()
                {
                    fullName = filepath,
                    description = ex.Message,
                });

                exceptionHandler(ex);
            }
        }

        static void exceptionHandler(Exception ex)
        {
            Console.WriteLine("[ERROR]: {0}", ex.Message);
        }
    }
}
