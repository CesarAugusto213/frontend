export class Usuario {
  id_user: number;
  tx_uid: string;
  tx_user: string;
  tx_email: string;
  tx_pass: string;
  tx_rol: string;
  tx_fullname: string;
  tx_avatar: string;

  constructor() {
    this.id_user = 0;
    this.tx_uid = "";
    this.tx_user = "";
    this.tx_email = "";
    this.tx_pass = "";
    this.tx_rol = "";
    this.tx_fullname = "";
    this.tx_avatar = "";
  }
}
