function sliceArr(arr, split){
    const res = []
    for (let i = 0; i < arr.length; i += split){
        const chunk = arr.slice(i, i + split)
        res.push(chunk)
    }
    return res
}
const arr = [1, 2, 3, 4, 5, 6]
console.log(sliceArr(arr,4))