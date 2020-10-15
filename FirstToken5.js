/* Lors d'une ICO, les premiers acheteurs sont toujours des privilégiés.
Retravaillez l'exercice précédent afin que ceux qui puissent obtenir 10 fois le nombre de 
tokens pour le prix standard soient enregistrés dans un mapping tel que: mapping(address => bool) public investors;
Ecrivez une fonction setInvestor(address _investor) qui ne pourra être exécutée que par le owner du contrat.
Depuis cette fonction on pourra ajouter des acheteurs privilégiés, en associant à l'adresse Ethereum de cet 
acheteur une valeur true. La fonction buyToken() devra prendre en compte ce mapping afin de vérifier si l'acheteur est privilégié.
Si c'est le cas ils obtiendront 10 fois le nombre de token pour le prix standard, sinon appliquez les prix standard de 1 token pour 1 ether.*/