let isVerified = false
let isLoginIn = true
let paymentToken = true
let guest = true
 
if (isVerified && isLoginIn && paymentToken) {
    console.log('greeting message')
}
else if (isVerified || guest) {
   console.log('allow free') 
}
else{
    console.log('admin talk')
}