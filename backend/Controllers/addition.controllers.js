module.exports.addNumbers = (req, res)=>{
    const {firstNumber, secondNumber} = req.body;
    console.log(firstNumber, secondNumber);
    const total = (parseFloat(firstNumber) + parseFloat(secondNumber)).toFixed(2);
    console.log(total);
    const data = {total, firstNumber, secondNumber}
    res.send({data});
}