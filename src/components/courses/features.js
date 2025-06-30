import {
  SectionCourse,
  SectionTitle,
  ListFeatures,
  FeaturesItem,
  FeaturesText
} from './styles'
import { IconCheck } from './iconCheck'

const Features = ({ isForo = false, isConfirmation }) => {
  return (
    <SectionCourse>
      <SectionTitle>Características</SectionTitle>
      <ListFeatures>
        <FeaturesItem>
          <IconCheck />
          <FeaturesText>Metodología 100% virtual.</FeaturesText>
        </FeaturesItem>
        <FeaturesItem>
          <IconCheck />
          <FeaturesText>
            Descuento especial de 2 a más estudiantes.
          </FeaturesText>
        </FeaturesItem>
        {!isForo && !isConfirmation && (
          <FeaturesItem>
            <IconCheck />
            <FeaturesText>
              Respuesta a tus preguntas por el docente a través del foro de
              debate.
            </FeaturesText>
          </FeaturesItem>
        )}
        <FeaturesItem>
          <IconCheck />
          <FeaturesText>
            Artículos, escritos, material audiovisual y demás recursos
            proporcionados por el docente.
          </FeaturesText>
        </FeaturesItem>
        <FeaturesItem>
          <IconCheck />
          <FeaturesText>
            Acceso las 24 horas del día, todos los días de la semana, por
            siempre.
          </FeaturesText>
        </FeaturesItem>
        { !isConfirmation &&
          <FeaturesItem>
            <IconCheck />
            <FeaturesText>
              Envio gratuito del certificado hasta la puerta de su casa.
            </FeaturesText>
          </FeaturesItem>
        }
        <FeaturesItem>
          <IconCheck />
          <FeaturesText>
            Plana docente de las mejores universidades del Perú.
          </FeaturesText>
        </FeaturesItem>
        { isConfirmation &&
          <FeaturesItem>
            <IconCheck />
            <FeaturesText>
              Obtén un certificado digital gratuito al aprobar el curso.
            </FeaturesText>
          </FeaturesItem>
        }
      </ListFeatures>
    </SectionCourse>
  )
}

export default Features
