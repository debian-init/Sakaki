import { MercadoPagoConfig, Payment, } from 'mercadopago';
import { v4 as uuidv4 } from 'uuid';
const { access_token } = require('./Credentials/Keys.json');


class MercadoPago {

    private client: any = new MercadoPagoConfig({ accessToken: access_token });

    private requestOptions: any = { idempotencyKey: '<IDEMPOTENCY_KEY>', };

    private payment = new Payment(this.client);

    private result = PaymentResponse;


    public async CreatePix() {
        this.payment.create({
            body: {
                transaction_amount: 0,
                description: 'null',
                payment_method_id: 'pix',
                payer: {
                    email: 'null',
                    identification: {
                        type: 'pix',
                        number: 'number',
                    }
                }
            },
            requestOptions: { idempotencyKey: uuidv4() }
        })
            .then((result) => console.log(result))
            .catch((error) => console.log(error))

    }


    public async CreateCard() {
        this.payment.create({
            body: {
                transaction_amount: 0,
                description: 'null',
                payment_method_id: 'pix',
                payer: {
                    email: 'null',
                    identification: {
                        type: 'pix',
                        number: 'number',
                    }
                }
            },
            requestOptions: { idempotencyKey: uuidv4() }
        })
            .then((result) => console.log(result))
            .catch((error) => console.log(error))


    }



} export default MercadoPago;