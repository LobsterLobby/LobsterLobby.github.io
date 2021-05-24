var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="Jason";
names[4]="Paul";
names[5]="Frank";
names[6]="Larry";
names[7]="Paula";
names[8]="Laura";
names[9]="Jim";

 // STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
 // Loop over the names array and say either 'Hello' or "Good Bye"
 // using the 'speak' method or either helloSpeaker's or byeSpeaker's
 // 'speak' method.
 // using either the helloSpeaker's or byeSpeaker's 'speak' method.
 // See Lecture 50, part 1

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}