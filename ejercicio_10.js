//Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad.

let persona1,

definir persona1,persona2, persona3 como caracter
	definir edadp1, edadp2, edadp3 como entero
	
	
	Escribir "Escribe nombre de la primera persona";
	Leer persona1;
	Escribir "Escribe edad de la primera persona";
	Leer edadp1;
	
	Escribir "Escribe nombre de la primera persona";
	Leer persona2;
	Escribir "Escribe edad de la primera persona";
	Leer edadp2;
	
	Escribir "Escribe nombre de la primera persona";
	Leer persona3;
	Escribir "Escribe edad de la primera persona";
	Leer edadp3;
	
	
	
	Si (edadp1<edadp2) Y (edadp1<edadp3) entonces 
		escribir "El menor es: " persona1," ",edadp1;
	sino 
		si (edadp2<edadp1) Y (edadp2<edadp3) entonces 
			escribir "El menor es: " persona2," ",edadp2;
		sino 
			si (edadp3<edadp1)Y (edadp3<edadp2) Entonces
				escribir "El menor es: " persona3," ",edadp3;
			FinSi
		FinSi
	FinSi