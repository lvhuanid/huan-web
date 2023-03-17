var merge = function (intervals) {
    let res = []
    intervals.sort((a,b) => a[0] - b[0] )
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++){
        let cur = intervals[i];
        if(prev[1] >= cur[0]){
            prev[1] = Math.max(cur[1],prev[1])
        }else{
            res.push(prev);
            prev = cur
        }
    }
    res.push(prev)
    return res;
}

console.log(merge([[1,2],[2,5],[6,9]]))