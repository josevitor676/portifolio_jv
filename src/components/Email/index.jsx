import { ContainerEmail } from "./Style"
import { Button } from "@chakra-ui/react"
import emailjs from "@emailjs/browser"

export const Email = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_fgqkbtp', e.target, '286lCB8Z9KEyjJMVm')
          .then((result) => {
              console.log(result);
          }, (error) => {
            console.log(error);
          });
        e.target.reset();
    }

    return(
        <ContainerEmail
            onSubmit={sendEmail}
        >
            <h2>Mande um Email</h2>
            <input type="text" placeholder="Nome" name="name"/>
            <input type="email" placeholder="Email" name="email"/>
            <textarea placeholder="Digite sua mensagem" name="message"/>
            <Button 
            color="white" 
            background="#00A04A"
            _hover={{ background:"#00a04ba7", transition:"ease 0.7s"}}
            w={["300px","350px","400px"]} 
            transition="ease 0.7s"
            display="flex" 
            justifyContent="center"
            alignItems="center"
            margin="15px auto"
            p="22px"
            type="submit"
            >
                Enviar
            </Button>
        </ContainerEmail>
    )
}