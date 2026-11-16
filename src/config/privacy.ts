/**
 * Privacy policy copy. Review it with the client before publishing a real site.
 */
import { site } from './site';

export interface PolicySection {
  title: string;
  paragraphs: string[];
}

export const privacyUpdated = '2026-11-16';

export const privacySections: PolicySection[] = [
  {
    title: 'Quién es responsable de tus datos',
    paragraphs: [
      `El responsable del tratamiento es ${site.brand.legalName}, con estudio en Godoy Cruz, Mendoza, Argentina. Podés escribirme a ${site.contact.email} por cualquier consulta sobre esta política.`,
    ],
  },
  {
    title: 'Qué datos recibo',
    paragraphs: [
      'Cuando completás el formulario de consulta recibo tu nombre, tu email, tu número de WhatsApp si decidís compartirlo, el tipo de servicio, la fecha estimada, el lugar y el mensaje que escribas.',
      'Este sitio no usa cookies de seguimiento ni herramientas de publicidad. No pido datos sensibles: por favor, no los incluyas en el mensaje.',
    ],
  },
  {
    title: 'Para qué los uso',
    paragraphs: [
      'Uso tus datos únicamente para responder tu consulta, enviarte una propuesta y, si me contratás, coordinar la sesión o el evento. No los vendo, no los cedo a terceros con fines comerciales y no te voy a sumar a listas de correo sin tu permiso.',
    ],
  },
  {
    title: 'Quién más interviene',
    paragraphs: [
      'El formulario se envía a través de un servicio de formularios para sitios estáticos que reenvía tu mensaje a mi correo. Ese proveedor procesa los datos solo para entregarlos y aplica sus propias medidas de seguridad.',
    ],
  },
  {
    title: 'Cuánto tiempo los conservo',
    paragraphs: [
      'Si no avanzamos con un trabajo, borro la consulta dentro de los 12 meses. Si me contratás, conservo los datos necesarios mientras dure la relación y el tiempo que exijan las obligaciones legales y contables.',
    ],
  },
  {
    title: 'Tus derechos',
    paragraphs: [
      'Podés pedirme en cualquier momento acceder a tus datos, corregirlos o eliminarlos escribiendo a mi email. Te respondo dentro de los plazos previstos por la Ley 25.326 de Protección de los Datos Personales.',
      'La Agencia de Acceso a la Información Pública, en su carácter de órgano de control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.',
    ],
  },
  {
    title: 'Sobre este sitio de demostración',
    paragraphs: [
      'Este es un sitio de demostración: el fotógrafo, los trabajos y los precios son ficticios, y el formulario no envía ni guarda ningún dato.',
    ],
  },
];
