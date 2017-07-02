function wypisz()
			{

				try
				{
					var liczba1 = document.getElementById("pole1").value;
					var liczba2 = document.getElementById("pole2").value;
					var napis = "";

					if(isNaN(liczba1) && isNaN(liczba2))  throw "error: both inputs contain wrong data";
				
					if(isNaN(liczba2)) throw "error: right input contains wrong data";
											
					if(isNaN(liczba1)) throw "error: left input contains wrong data";
						
					var liczba11 = parseInt(liczba1);
					var liczba22 = parseInt(liczba2);
					
					if (liczba11<liczba22) 
					{
						for (i=liczba11; i<=liczba22; i++)
						{
							napis = napis + i + " ";
						}
					}

					else if (liczba22<liczba11)
					{					
						for (i=liczba11; i>=liczba22; i--)
						{
							napis = napis + i + " ";
						}
					} 
					else throw "error: no elements";

					document.getElementById("wynik").innerHTML = napis;
				}
				
				catch (e)
				{
					document.getElementById("wynik").innerHTML = e;	
				}
				
			}
