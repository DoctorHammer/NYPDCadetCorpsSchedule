//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<AcroForm>
//<ACRO_source>Date_01:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_01:Calculate ***********/
if (this.getField("FirstDay").value == "Sunday") {
  event.value = "1";
} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_02:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_02:Calculate ***********/
if (this.getField("FirstDay").value == "Monday") {
  event.value = "1";

} else if (this.getField("Date_01").value != "") { 
  event.value = this.getField("Date_01").value + 1;

} else {
  event.value = "";
}



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_03:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_03:Calculate ***********/
if (this.getField("FirstDay").value == "Tuesday") {
  event.value = "1";

} else if (this.getField("Date_02").value != "") { 
  event.value = this.getField("Date_02").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_04:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_04:Calculate ***********/
if (this.getField("FirstDay").value == "Wednesday") {
  event.value = "1";

} else if (this.getField("Date_03").value != "") { 
  event.value = this.getField("Date_03").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_05:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_05:Calculate ***********/
if (this.getField("FirstDay").value == "Thursday") {
  event.value = "1";

} else if (this.getField("Date_04").value != "") { 
  event.value = this.getField("Date_04").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_06:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_06:Calculate ***********/
if (this.getField("FirstDay").value == "Friday") {
  event.value = "1";

} else if (this.getField("Date_05").value != "") { 
  event.value = this.getField("Date_05").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_07:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_07:Calculate ***********/
if (this.getField("FirstDay").value == "Saturday") {
  event.value = "1";

} else if (this.getField("Date_06").value != "") { 
  event.value = this.getField("Date_06").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_08:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_08:Calculate ***********/
event.value = this.getField("Date_07").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_09:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_09:Calculate ***********/
event.value = this.getField("Date_08").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_10:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_10:Calculate ***********/
event.value = this.getField("Date_09").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_11:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_11:Calculate ***********/
event.value = this.getField("Date_10").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_12:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_12:Calculate ***********/
event.value = this.getField("Date_11").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_13:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_13:Calculate ***********/
event.value = this.getField("Date_12").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_14:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_14:Calculate ***********/
event.value = this.getField("Date_13").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_15:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_15:Calculate ***********/
event.value = this.getField("Date_14").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_16:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_16:Calculate ***********/
event.value = this.getField("Date_15").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_17:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_17:Calculate ***********/
event.value = this.getField("Date_16").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_18:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_18:Calculate ***********/
event.value = this.getField("Date_17").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_19:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_19:Calculate ***********/
event.value = this.getField("Date_18").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_20:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_20:Calculate ***********/
event.value = this.getField("Date_19").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_21:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_21:Calculate ***********/
event.value = this.getField("Date_20").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_22:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_22:Calculate ***********/
event.value = this.getField("Date_21").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_23:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_23:Calculate ***********/
event.value = this.getField("Date_22").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_24:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_24:Calculate ***********/
event.value = this.getField("Date_23").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_25:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_25:Calculate ***********/
event.value = this.getField("Date_24").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_26:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_26:Calculate ***********/
event.value = this.getField("Date_25").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_27:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_27:Calculate ***********/
event.value = this.getField("Date_26").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_28:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_28:Calculate ***********/
event.value = this.getField("Date_27").value + 1
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_29:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_29:Calculate ***********/
if (this.getField("Date_28").value == "") {
  event.value = "";

} else if (this.getField("Date_28").value < this.getField("MonthEnd").value) { 
  event.value = this.getField("Date_28").value + 1;

} else {
  event.value = "";
}




//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_30:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_30:Calculate ***********/
if (this.getField("Date_29").value == "") {
  event.value = "";

} else if (this.getField("Date_29").value < this.getField("MonthEnd").value) { 
  event.value = this.getField("Date_29").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_31:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_31:Calculate ***********/
if (this.getField("Date_30").value == "") {
  event.value = "";

} else if (this.getField("Date_30").value < this.getField("MonthEnd").value) { 
  event.value = this.getField("Date_30").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_32:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_32:Calculate ***********/
if (this.getField("Date_31").value == "") {
  event.value = "";

} else if (this.getField("Date_31").value < this.getField("MonthEnd").value) { 
  event.value = this.getField("Date_31").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_33:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_33:Calculate ***********/
if (this.getField("Date_32").value == "") {
  event.value = "";

} else if (this.getField("Date_32").value < this.getField("MonthEnd").value) { 
  event.value = this.getField("Date_32").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_34:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_34:Calculate ***********/
if (this.getField("Date_33").value == "") {
  event.value = "";

} else if (this.getField("Date_33").value < this.getField("MonthEnd").value) { 
  event.value = this.getField("Date_33").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_35:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_35:Calculate ***********/
if (this.getField("Date_34").value == "") {
  event.value = "";

} else if (this.getField("Date_34").value < this.getField("MonthEnd").value) { 
  event.value = this.getField("Date_34").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_36:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_36:Calculate ***********/
if (this.getField("Date_35").value == "") {
  event.value = "";

} else if (this.getField("Date_35").value < this.getField("MonthEnd").value) { 
  event.value = this.getField("Date_35").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Date_37:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Date_37:Calculate ***********/
if (this.getField("Date_36").value == "") {
  event.value = "";

} else if (this.getField("Date_36").value < this.getField("MonthEnd").value) { 
  event.value = this.getField("Date_36").value + 1;

} else {
  event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours1:Calculate ***********/
if (this.getField("TourEnd01").value == "" || this.getField("TourStart01").value == "") {
  event.value = "";

} else {

event.value = ((this.getField("TourEnd01").value - this.getField("TourStart01").value) - 100)/100
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours10:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours10:Calculate ***********/
if (this.getField("TourEnd10").value == "" || this.getField("TourStart10").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd10").value - this.getField("TourStart10").value) - 100)/100;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours11:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours11:Calculate ***********/
if (this.getField("TourEnd11").value == "" || this.getField("TourStart11").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd11").value - this.getField("TourStart11").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours12:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours12:Calculate ***********/
if (this.getField("TourEnd12").value == "" || this.getField("TourStart12").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd12").value - this.getField("TourStart12").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours13:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours13:Calculate ***********/
if (this.getField("TourEnd13").value == "" || this.getField("TourStart13").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd13").value - this.getField("TourStart13").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours14:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours14:Calculate ***********/
if (this.getField("TourEnd14").value == "" || this.getField("TourStart14").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd14").value - this.getField("TourStart14").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours15:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours15:Calculate ***********/
if (this.getField("TourEnd15").value == "" || this.getField("TourStart15").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd15").value - this.getField("TourStart15").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours16:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours16:Calculate ***********/
if (this.getField("TourEnd16").value == "" || this.getField("TourStart16").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd16").value - this.getField("TourStart16").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours17:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours17:Calculate ***********/
if (this.getField("TourEnd17").value == "" || this.getField("TourStart17").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd17").value - this.getField("TourStart17").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours18:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours18:Calculate ***********/

if (this.getField("TourEnd18").value == "" || this.getField("TourStart18").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd18").value - this.getField("TourStart18").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours19:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours19:Calculate ***********/


if (this.getField("TourEnd19").value == "" || this.getField("TourStart19").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd19").value - this.getField("TourStart19").value) - 100)/100;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours2:Calculate ***********/
if (this.getField("TourEnd02").value == "" || this.getField("TourStart02").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd02").value - this.getField("TourStart02").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours20:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours20:Calculate ***********/

if (this.getField("TourEnd20").value == "" || this.getField("TourStart20").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd20").value - this.getField("TourStart20").value) - 100)/100;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours21:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours21:Calculate ***********/
if (this.getField("TourEnd21").value == "" || this.getField("TourStart21").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd21").value - this.getField("TourStart21").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours22:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours22:Calculate ***********/

if (this.getField("TourEnd22").value == "" || this.getField("TourStart22").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd22").value - this.getField("TourStart22").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours23:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours23:Calculate ***********/
if (this.getField("TourEnd23").value == "" || this.getField("TourStart23").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd23").value - this.getField("TourStart23").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours24:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours24:Calculate ***********/
if (this.getField("TourEnd24").value == "" || this.getField("TourStart24").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd24").value - this.getField("TourStart24").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours25:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours25:Calculate ***********/
if (this.getField("TourEnd25").value == "" || this.getField("TourStart25").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd25").value - this.getField("TourStart25").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours26:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours26:Calculate ***********/
if (this.getField("TourEnd26").value == "" || this.getField("TourStart26").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd26").value - this.getField("TourStart26").value) - 100)/100;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours27:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours27:Calculate ***********/
if (this.getField("TourEnd27").value == "" || this.getField("TourStart27").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd27").value - this.getField("TourStart27").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours28:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours28:Calculate ***********/

if (this.getField("TourEnd28").value == "" || this.getField("TourStart28").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd28").value - this.getField("TourStart28").value) - 100)/100;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours29:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours29:Calculate ***********/
if (this.getField("TourEnd29").value == "" || this.getField("TourStart29").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd29").value - this.getField("TourStart29").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours3:Calculate ***********/
if (this.getField("TourEnd03").value == "" || this.getField("TourStart03").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd03").value - this.getField("TourStart03").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours30:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours30:Calculate ***********/
if (this.getField("TourEnd30").value == "" || this.getField("TourStart30").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd30").value - this.getField("TourStart30").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours31:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours31:Calculate ***********/
if (this.getField("TourEnd31").value == "" || this.getField("TourStart31").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd31").value - this.getField("TourStart31").value) - 100)/100;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours32:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours32:Calculate ***********/
if (this.getField("TourEnd32").value == "" || this.getField("TourStart32").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd32").value - this.getField("TourStart32").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours33:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours33:Calculate ***********/
if (this.getField("TourEnd33").value == "" || this.getField("TourStart33").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd33").value - this.getField("TourStart33").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours34:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours34:Calculate ***********/
if (this.getField("TourEnd34").value == "" || this.getField("TourStart34").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd34").value - this.getField("TourStart34").value) - 100)/100;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours35:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours35:Calculate ***********/
if (this.getField("TourEnd35").value == "" || this.getField("TourStart35").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd35").value - this.getField("TourStart35").value) - 100)/100;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours36:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours36:Calculate ***********/
if (this.getField("TourEnd36").value == "" || this.getField("TourStart36").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd36").value - this.getField("TourStart36").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours37:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours37:Calculate ***********/
if (this.getField("TourEnd37").value == "" || this.getField("TourStart37").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd37").value - this.getField("TourStart37").value) - 100)/100;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours4:Calculate ***********/
if (this.getField("TourEnd04").value == "" || this.getField("TourStart04").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd04").value - this.getField("TourStart04").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours5:Calculate ***********/
if (this.getField("TourEnd05").value == "" || this.getField("TourStart05").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd05").value - this.getField("TourStart05").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours6:Calculate ***********/
if (this.getField("TourEnd06").value == "" || this.getField("TourStart06").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd06").value - this.getField("TourStart06").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours7:Calculate ***********/
if (this.getField("TourEnd07").value == "" || this.getField("TourStart07").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd07").value - this.getField("TourStart07").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours8:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours8:Calculate ***********/
if (this.getField("TourEnd08").value == "" || this.getField("TourStart08").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd08").value - this.getField("TourStart08").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Hours9:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Hours9:Calculate ***********/
if (this.getField("TourEnd09").value == "" || this.getField("TourStart09").value == "") {
  event.value = "";

} else {
event.value = ((this.getField("TourEnd09").value - this.getField("TourStart09").value) - 100)/100;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd01:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd01:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd02:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd02:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd03:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd03:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd04:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd04:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd05:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd05:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd06:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd06:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd07:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd07:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd08:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd08:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd09:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd09:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd10:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd10:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd11:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd11:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd12:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd12:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd13:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd13:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd14:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd14:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd15:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd15:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd16:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd16:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd17:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd17:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd18:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd18:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd19:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd19:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd20:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd20:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd21:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd21:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd22:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd22:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd23:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd23:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd24:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd24:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd25:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd25:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd26:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd26:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd27:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd27:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd28:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd28:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd29:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd29:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd30:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd30:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd31:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd31:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd32:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd32:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd33:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd33:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd34:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd34:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd35:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd35:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd36:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd36:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourEnd37:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourEnd37:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart01:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart01:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart02:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart02:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart03:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart03:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart04:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart04:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart05:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart05:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart06:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart06:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart07:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart07:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart08:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart08:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart09:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart09:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart10:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart10:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart11:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart11:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart12:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart12:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart13:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart13:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart14:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart14:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart15:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart15:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart16:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart16:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart17:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart17:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart18:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart18:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart19:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart19:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart20:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart20:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart21:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart21:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart22:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart22:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart23:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart23:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart24:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart24:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart25:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart25:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart26:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart26:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart27:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart27:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart28:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart28:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart29:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart29:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart30:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart30:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart31:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart31:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart32:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart32:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart33:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart33:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart34:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart34:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart35:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart35:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart36:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart36:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>TourStart37:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:TourStart37:Annot1:OnBlur:Action1 ***********/
if (this.getField("Week1").value > 34) {
this.getField("34_1").display = display.visible; 


} else {
  this.getField("34_1").display = display.hidden;
}

if (this.getField("Week2").value > 34) {
this.getField("34_2").display = display.visible; 


} else {
  this.getField("34_2").display = display.hidden;
}

if (this.getField("Week3").value > 34) {
this.getField("34_3").display = display.visible; 


} else {
  this.getField("34_3").display = display.hidden;
}

if (this.getField("Week4").value > 34) {
this.getField("34_4").display = display.visible; 


} else {
  this.getField("34_4").display = display.hidden;
}

if (this.getField("Week5").value > 34) {
this.getField("34_5").display = display.visible; 


} else {
  this.getField("34_5").display = display.hidden;
}

//</ACRO_script>
//</AcroForm>


