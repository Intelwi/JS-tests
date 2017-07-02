function wypisz()
			{
				var liczba1 = document.getElementById("pole1").value;
				var liczba2 = document.getElementById("pole2").value;
				var napis = "";

				if(isNaN(liczba1) && isNaN(liczba2))  //sprawdzanie czy obie wartosci zle
				{
					document.getElementById("wynik").innerHTML =
 					"error: both inputs contain wrong data";
					return;
				}

				if(isNaN(liczba2)) //sprawdzanie czy prawa wartosc zla
				{
					document.getElementById("wynik").innerHTML = 				
					"error: right input contains wrong data";
					return;
				}					
					
				if(isNaN(liczba1)) //sprawdzanie czy lewa wartosc zla
				{	
					document.getElementById("wynik").innerHTML =	
					"error: left input contains wrong data";
					return;
				}
			

				
				if (liczba1<liczba2) //
				{
					for (i=liczba1; i<=liczba2; i++)
					{
						napis = napis + i + " ";
					}
				}

				else if (liczba2<liczba1)
				{					
					for (i=liczba1; i>=liczba2; i--)
					{
						napis = napis + i + " ";
					}
				} 
				else 
				{
					document.getElementById("wynik").innerHTML = 
					"error: no elements";
					return;	
				}
				document.getElementById("wynik").innerHTML = napis;
			}
