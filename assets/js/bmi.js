				// BMI Kalkulator

						window.calculateBMI = function() {
						
							//alert("Dziala!");
							
						    const weight = parseFloat(document.getElementById("weight").value);
						    const heightCm = parseFloat(document.getElementById("height").value);
							
						    const result = document.getElementById("bmi-result");

						    	if (weight < 20 || weight > 250) {
										result.className = "";
										result.innerHTML = " Waga musi być z zakresu 20-250 kg.";
										return;
									}

								if (heightCm < 100 || heightCm > 220) {
										result.className = "";
										result.innerHTML = " Wzrost musi być z zakresu 100-220 cm.";
										return;
									}


						    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
						
						        result.className = "";
						        result.innerHTML = "Wprowadź poprawną wagę i wzrost.";
						
						        return;
						    }
						
						    const height = heightCm / 100;
						    const bmi = weight / (height * height);
						
						    let category = "";
						    let description = "";
						    let cssClass = "";
						
						    if (bmi < 18.5) {
						
						        category = "Niedowaga";
						        cssClass = "bmi-underweight";
						        description = "Masa ciała poniżej zalecanego zakresu.";
						
						    } else if (bmi < 25) {
						
						        category = "Prawidłowa masa ciała";
						        cssClass = "bmi-normal";
						        description = "BMI znajduje się w zalecanym zakresie.";
						
						    } else if (bmi < 30) {
						
						        category = "Nadwaga";
						        cssClass = "bmi-overweight";
						        description = "BMI jest powyżej zalecanego zakresu.";
						
						    } else {
						
						        category = "Otyłość";
						        cssClass = "bmi-obesity";
						        description = "BMI znacznie przekracza zalecany zakres.";
						
						    }
						
						    result.className = cssClass;
						
						    result.innerHTML = `
						        <h3>BMI: ${bmi.toFixed(1)}</h3>
						        <strong>${category}</strong>
						        <p>${description}</p>
						    `;
						}