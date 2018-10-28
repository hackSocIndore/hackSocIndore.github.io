#include<stdio.h>
#include<conio.h>
void main(){
int n, i;
char ch='y';
clrscr();
printf("\nEnter the no.");
scanf("%d",&n);
     for(i=2;i<=n/2;i++)
     {
     if(n%i==0)
     ch='n';
     break;
     }
  if(ch=='y')
    printf("%d is  a prime no.",n);
    else
    printf("%d is nt  a prime no.",n);
      getch();
}