import java.io.*;
import java.util.Scanner;
class fileHandlingDemo
{  File f;
   FileReader fr;
   FileWriter fw;
  Scanner sc=new Scanner (System.in);
void CreateFile() throws IoException
{ f=new File("Demo1.txt");
  if(!f.exists())
  { f.CreateNewFile();}
}
void WriteFile() throws IOException
{ String str;
  System.out.println("Enter context");
  str=sc.nextline();
fw=new FileWriter(f);
bufferedWriter bw=new BufferedWriter(fw);
 bw.write(str);
bw.close();
}
void readfile() throws IOException
 {String s="", s1="";
 fr= new FileReader(fr);
  while((s=br.readLine() )!null)
   { s1=s1+s;}
   System.out.println(s);
   
}
public static void main (String args[])
  {FileHandlingDemo obj= new FileHandlingDemo();
   obj.CreateFile();
    obj.WriteFile();
    obj.ReadFile();
  }
}