import Link from 'next/link'
import Payment from './payment'

import {
  SectionCourse,
  SectionTitle,
  ListFeatures,
  FeaturesItem,
  FeaturesText,
  ThanksTitle,
  ThanksBtn
} from './styles'
import { IconCheck } from './iconCheck'
import { MEDIA_PATH } from 'utils/files/path'

export const PaymentInfo = ({ name, brochure, price, academicHours }) => {
  return (
    <>
      <ThanksTitle>Información del {name}</ThanksTitle>
      <br />
      <ThanksBtn href={MEDIA_PATH + brochure} target='_blank'>
        Descargar Brochure
      </ThanksBtn>
      <br />
      <SectionCourse isThanks>
        <SectionTitle isThanks>Información</SectionTitle>
        <ListFeatures isThanks>
          <FeaturesItem isThanks>
            <IconCheck />
            <FeaturesText isThanks>
              Fecha de inicio: Inscripciones abiertas.
            </FeaturesText>
          </FeaturesItem>
          <FeaturesItem isThanks>
            <IconCheck />
            <FeaturesText isThanks>Precio normal: <strong>S/{price}</strong>.</FeaturesText>
          </FeaturesItem>
          <FeaturesItem isThanks>
            <IconCheck />
            <FeaturesText isThanks>Precio especial 🎁: Responde rápido a este correo para brindarte un <strong>descuento especial</strong> y por tu compra un <strong>regalo especial</strong>.</FeaturesText>
          </FeaturesItem>
          <FeaturesItem isThanks>
            <IconCheck />
            <FeaturesText isThanks>
              Modalidad: 100% virtual con acceso ilimitado por siempre.
            </FeaturesText>
          </FeaturesItem>
          <FeaturesItem isThanks>
            <IconCheck />
            <FeaturesText isThanks>
              Certificado: Por {academicHours} horas académicas, con envío hasta
              la puerta de su casa.
            </FeaturesText>
          </FeaturesItem>
        </ListFeatures>
      </SectionCourse>
      <Payment price={price} isThanks />
      <SectionCourse isThanks>
        <SectionTitle isThanks>Más:</SectionTitle>
        <ListFeatures isThanks>
          <FeaturesItem isThanks>
            <IconCheck />
            <FeaturesText isThanks>
              <strong>Consultas:</strong> Para cualquier consulta puede llamarnos al <a href='tel:+5114800022'>+5114800022</a>, escribirnos al WhatsApp <a target="_blank" href={`https://wa.me/5114800022?text=Hola, deseo información del ` + name}>+5114800022</a> o enviarnos un correo a cursos@eai.edu.pe
            </FeaturesText>
          </FeaturesItem>
          <FeaturesItem isThanks>
            <IconCheck />
            <FeaturesText isThanks>
              <strong>Catálogo de cursos:</strong>{' '}
              <Link href='/cursos'>
                <a>Click aquí!</a>
              </Link>
            </FeaturesText>
          </FeaturesItem>
        </ListFeatures>
      </SectionCourse>
    </>
  )
}
