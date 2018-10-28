import java.util.Scanner;
class Marksheet{
public static void main(String [] args)
{
  Scanner s=new Scanner(System.in);
  String sub1,sub2,sub3,sub4,sub5,sub="",result="",dist="";
  int m1,m2,m3,m4,m5,grace=0;
  System.out.println("enter first subject name");
    sub1=s.next();
   System.out.println("enter first subject maarks");
    m1=s.nextInt();
System.out.println("enter second subject name");
    sub2=s.next();
   System.out.println("enter second subject maarks");
    m2=s.nextInt();
System.out.println("enter third subject name");
    sub3=s.next();
   System.out.println("enter third subject maarks");
    m3=s.nextInt();
System.out.println("enter four subject name");
    sub4=s.next();
   System.out.println("enter four subject maarks");
    m4=s.nextInt();
System.out.println("enter five subject name");
    sub5=s.next();
   System.out.println("enter five subject maarks");
    m5=s.nextInt();
if((m1>=0&&m1<=100)&&(m2>=0&&m2<=100)&&(m3>=0&&m3<=100)&&(m4>=0&&m4<=100)&&(m5>=0&&m5<=100))
{
   int c=0;
  if(m1<33)
   { c++;
      sub+=sub1+" ";
     }
    if(m2<33) 
    { c++;
      sub+=sub2+" ";
     }
     if(m3<33) 
    { c++;
      sub+=sub3+" ";
     }
    if(m4<33) 
    { c++;
      sub+=sub4+" ";
     }
      if(m5<33) 
    { c++;
      sub+=sub5+" ";
     }
  if(m1>=75)
 dist+=sub1" ";
   if(m2>=75)
 dist+=sub2" ";
  if(m3>=75)
 dist+=sub3" ";
  if(m4>=75)
 dist+=sub4" ";
  if(m5>=75)
 dist+=sub5" ";

 if(c==0||(c==1&&grace>=28))
{
   float per=(m1+m2+m3+m4+m5)/5;
    if(per>=33&&per<=45)
result= "third division with"+per+"%";
  else if(per<60)
  result= "second division with"+per+"%";
   else
    result= "first division with"+per+"%";
  if(grace>=28)
  result="pass by grace and grace marks is"+(grace-33)+"grace subject name is"+sub;
   if (dist!=" ")
   result+= ",distinction subject name is "+dist;
}
else if(c==1)
result="try again you are supply in"+sub;
else
result="sorry you are fail in "+sub;
System.out.println(result);
}
else
System.out.println("subject marks should be 0 to 100");

 

}
}