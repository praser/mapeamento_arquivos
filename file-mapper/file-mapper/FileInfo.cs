using CsvHelper;
using System;
using System.Collections.Generic;
using System.IO;

namespace file_mapper
{
    class FileInfo
    {
        public string fullName { get; set; }
        public string directory { get; set; }
        public string name { get; set; }
        public string extension { get; set; }
        public long length { get; set; }
        public DateTime creationTime { get; set; }
        public DateTime lastAccessTime { get; set; }
        public DateTime lastWriteTime { get; set; }
        public DateTime lastOccurrenceTime { get; set; }
        public string checksum { get; set; }

        public static void writeToCSV(List<FileInfo> records, string filepath)
        {
            StreamWriter writer = new StreamWriter(filepath);
            CsvWriter csv = new CsvWriter(writer);

            csv.Configuration.Delimiter = ";";
            csv.WriteHeader<FileInfo>();
            csv.WriteRecords(records);
            writer.Flush();
        }
    }
}
