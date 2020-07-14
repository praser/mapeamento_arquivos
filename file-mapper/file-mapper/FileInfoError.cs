using CsvHelper;
using System.Collections.Generic;
using System.IO;

namespace file_mapper
{
    class FileInfoError
    {
        public string fullName { get; set; }
        public string description { get; set; }

        public static void writeToCSV(List<FileInfoError> records, string filepath)
        {
            StreamWriter writer = new StreamWriter(filepath);
            CsvWriter csv = new CsvWriter(writer);

            csv.Configuration.Delimiter = ";";
            csv.WriteHeader<FileInfoError>();
            csv.WriteRecords(records);
            writer.Flush();
        }
    }
}
