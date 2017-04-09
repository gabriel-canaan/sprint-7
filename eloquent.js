function min(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
/* Not finished this one yet I'll have another crack tomorrow
function isEven(N) {
    if (n === 0) {
        return true;
    }
    if (n == 1) {
        return false;
    }
    if ((n - 2) =
*/

    function countBs(string) {
        var bee = 0;
        for (b = 0; b < string.length; b++) {
            if (string.charAt(b) === 'B') {
                bee++;
            }
        }
        return bee;
    }
