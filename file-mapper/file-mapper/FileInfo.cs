using CsvHelper;
using CsvHelper.TypeConversion;
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
            using (var writer = new StreamWriter(filepath))
            using (var csv = new CsvWriter(writer))
            {
                var options = new TypeConverterOptions
                {
                    Format = "o"
                };
                TypeConverterOptionsFactory.AddOptions<DateTime>(options);

                csv.Configuration.Delimiter = ";";
                csv.WriteHeader<FileInfo>();
                csv.WriteRecords(records);
                writer.Flush();
            }

        }
    }
}
