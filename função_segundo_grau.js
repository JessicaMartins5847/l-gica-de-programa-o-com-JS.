// Função para resolver uma equação de segundo grau
// ax²+bx+c
function resolverEquaçãoSegundograu(a,b,c)
{
  // Passo 1: calcular o delta
  // o delta nos ajuda a determinar o número de soluções reais : )
  let delta = b*b-4*a*c
   // Passo 2: Verificar se o delta é negativo, zero ou positivo
   if(delta<0){
// se delta <0, a equação não tem soluções reais
console.log("A equação não tem soluções reais")

   }else if(delta===0){
// se o delta for igual a zero, a equação tem raízes iguais
let x =b/(2*a)
console.log("A equação tem uma solução real, x=", x)


}
else{
    // se o delta for positivo, a equação tem duas soluções diferentes
    let x1 = (-b+Math.sqrt(delta)/(2*a))
    let x2 = (-b-Math.sqrt(delta)/(2*a))

    console.log("A equação tem duas raizes reais: x1=",x1,"e x2=",x2)
}

}
resolverEquaçãoSegundograu(2,45,-87)



























