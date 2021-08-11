const app = Vue.createApp({
    data(){
        return {
            currentmoney: "",
            dinheiroEm: "BRL",
            dinheiroPara: "USD"
        }
    },
    methods: {
        convertedmoney: function (value){  
            taxa = function (dinheiroEm,dinheiroPara){
                if (dinheiroEm==dinheiroPara)
                    return 1;
                switch(dinheiroEm){
                    case "USD":
                    if(dinheiroPara=="BRL")
                        return 5.2164
                    else
                        return 1.0/1.2206
                    case "EUR":
                    if(dinheiroPara=="BRL")
                        return 6.3970
                    else
                        return 1.2206
                    case "BRL":
                    if(dinheiroPara=="USD")
                        return 1.0/5.2164
                    else
                        return 1.0/6.3970
                    default: 
                }
            }
            val = value*(1-1.1/100.0-1.0/100.0)*taxa(this.dinheiroEm,this.dinheiroPara)
            if (this.dinheiroEm==this.dinheiroPara)
                return "Não é possivel converter para a mesma moeda."
            return {"BRL":"R$ ","USD":"US$ ","EUR":"€ "}[this.dinheiroPara]+ Number(val).toFixed(2)
        },
        
        
    }
})


app.mount("#app")