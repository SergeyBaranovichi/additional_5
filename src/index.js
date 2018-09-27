module.exports = function check(str, bracketsConfig) {
  // your solution
var i =0;
var j=0;
var arr = str.split('');
var k = arr.length/2;
for(var l=0; l<k; l++)
	{
	j=0;
	for(var j=0; j<bracketsConfig.length; j++)
		{
		var arrr = bracketsConfig[j];
		i=0;
		while(i<arr.length)
			{
			if(arr[i]==arrr[0] && arr[i+1]==arrr[1])
				{
				arr.splice(i,2);
				i=0;
				}
			else i++;
			}
		}
	}
if (arr.length>0) return false; else return true;
}
