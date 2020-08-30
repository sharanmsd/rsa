<html>
<head>
<title> RSA ALGORITHM </title>
</head>
<body>
</body>
<script type="text/javascript">
<!-- alert(Math.pow(27,107)); -->
p=parseInt(prompt("Enter a prime number for p"));
for(i=2;i<p;i++)
{
 if(p%i==0)
 {
	alert("The value of p should be prime");
	p=parseInt(prompt("Enter a prime number for p"));
 }
}
q=parseInt(prompt("Enter a prime number for q"));
for(i=2;i<q;i++)
{
 if(q%i==0)
 {
	alert("The value of q should be prime");
	p=parseInt(prompt("Enter a prime number for q"));
 }
}
n=p*q;
phi=(p-1)*(q-1);
alert("Your n value is "+n);
alert("Your phi(n) value is "+phi);
while(1)
{
flag=0;
 coop=parseInt(prompt("Enter a co prime for phi(n)"+ phi));
 if(coop>phi)
 {
	min=phi;
 }
 else
 {
   min=coop;
  }
  for(i=min;i>=1;i--)
  {
	if((phi%i==0)&&(coop%i==0))
	{
		gcd=i;
		<!-- flag=1; -->
		break;
	}
   }
   if(gcd==1)
   {
     e=coop
	 alert("Co prime fixed successfully");
	 break;
	}
	else
	{
		alert("Gcd is "+gcd +" It should be 1");
	}
	
	
  }
  
  q1=phi
  q2=e
  
  t1=0
  t2=1
  while(q2!=0)
  {
	q=Math.floor(q1/q2);
    r=q1%q2;
	t=t1-(q*t2);
	q1=q2;
	q2=r;
	t1=t2;
	t2=t;
  }
  if(t1<0)
  {
   t1=phi+t1;
   }
  alert("YOUR PRIVATE KEY IS "+t1+" FIXED SUCCESSFULLY"); 
  var str="abcdefghijklmnopqrstuvwxyz";
  plain=prompt("Enter the plain text character to encrypt");
  for(i=0;i<str.length;i++)
  {
	if(str[i]==plain)
	{
	    m=i+1;
		alert("YOUR M VALUE IS "+(i+1));
	}
   }
   c=Math.pow(m,e);
   c=c%n;
   alert(c);
   <!-- for(i=0;i<str.length;i++) -->
   <!-- { -->
    <!-- if((i+1)==c) -->
	<!-- { -->
	  <!-- alert("YOUR ENCRYPTED CHARACTER IS "+str[i]) -->
	  <!-- break; -->
	<!-- } -->
	<!-- } -->
	res=Math.pow(c,t1);
	res=res%n;
	alert(res);
	res=re%26;
	alert("DECRYPTED MESSAGE IS "+str[res-1]);
</script>
</html>
