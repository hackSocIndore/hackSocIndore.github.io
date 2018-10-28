class Hod
{  String branch;
 String name;
  void info(String branch, String name)
 { this.branch=branch;
   this.name=name;
  }
 void show()
 { System.out.println("name is "+name+" branch is "+branch);}
}
class Faculty extends Hod
{ int id;
  void info1(int id)
  { this.id=id;}
  void show1()
 { System.out.println("name is "+name+" branch is "+branch+ " id is "+id); }
}
class Student extends Faculty
{ void show2()
  { System.out.println("this is multilevel class");}
}
class MultiInhrmain
{  public static void main(String args[])
   {  Student obj = new Student();
   obj.info("CS", "ANAND RAJAWAT");
    obj.show();
   obj.info("cs", "SOURABH SHARMA");
   obj.info1(101);
   obj.show1();
   obj.info("cs","YASH AGRAWAL");
   obj.info1(1001);
   obj.show2();
   obj.show1();
  }
}