import {
  SectionCourse,
  SectionTitle,
  SectionText,
  LinkPayment,
  PaymentList,
  PaymentItem,
  PaymentItemImg,
  PaymentItemText
} from './styles'
import { usePayments } from '../../hooks'

const Payment = ({ price, isThanks = '' }) => {
  const { payments } = usePayments()
  const payment = payments.find(pay => pay.amount === price)
  const url = payment && payment.url
  return (
    <SectionCourse isThanks={isThanks}>
      <SectionTitle isThanks={isThanks}>Formas de Pago</SectionTitle>
      {url && (
        <SectionText>
          Pago online con tarjeta de crédito o débito (S/.{price} por un
          estudiante):{' '}
          <LinkPayment target='_blank' href={url}>
            Pagar ahora S/.{price}.
          </LinkPayment>
        </SectionText>
      )}
      <PaymentList isThanks={isThanks}>
        <PaymentItem>
          <PaymentItemImg src='/static/img/bcp.png' />
          <PaymentItemText>
            Depósito o transferencia directa a Cuenta Corriente BCP Soles:
            570-2495897-0-53.
          </PaymentItemText>
        </PaymentItem>
        <PaymentItem>
          <PaymentItemImg src='/static/img/cci.png' />
          <PaymentItemText>
            Transferencia desde cualquier banco usando el CCI (Código de cuenta
            interbancario): 00257000249589705305.
          </PaymentItemText>
        </PaymentItem>
        <PaymentItem>
          <PaymentItemImg src='/static/img/nacion.png' />
          <PaymentItemText>
            Depósito o transferencia directa a Cuenta Corriente Banco de la
            Nación Soles: 00-749-009683.
          </PaymentItemText>
        </PaymentItem>
        <PaymentItem>
          <PaymentItemImg src='/static/img/interbank.png' />
          <PaymentItemText>
            Depósito o transferencia directa a Cuenta Corriente Interbank Soles:
            200-3001675956.
          </PaymentItemText>
        </PaymentItem>
        <PaymentItem>
          <PaymentItemImg src='/static/img/bbva.png' />
          <PaymentItemText>
            Depósito o transferencia directa a Cuenta Corriente BBVA Banco
            Continental Soles: 0011-0249-0100176224-02.
          </PaymentItemText>
        </PaymentItem>
        <PaymentItem>
          <PaymentItemImg src='/static/img/scotiabank.png' />
          <PaymentItemText>
            Depósito o transferencia directa a Cuenta Corriente Scotiabank
            Soles: 000-8518564.
          </PaymentItemText>
        </PaymentItem>
        <PaymentItem>
          <PaymentItemImg src='/static/img/paypal.png' />
          <PaymentItemText>También aceptamos pagos por PayPal.</PaymentItemText>
        </PaymentItem>
      </PaymentList>
    </SectionCourse>
  )
}

export default Payment
