var str = "Piyush";
var countVowels, countConsonent;

for(i=0;i<str.length;i++){
    if(str[i]=='a' || str[i]=='e' ||str[i]=='i' ||str[i]=='o' ||str[i]=='u' || str[i]=='A' || str[i]=='E' ||str[i]=='I' ||str[i]=='O' ||str[i]=='U'){
        countVowels++;
    }
    else
        countConsonent++;
}

document.write("No of vowels is "+countVowels+" and No of consonents is "+countConsonent);