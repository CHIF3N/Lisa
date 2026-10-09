import { PROFILE_DATA } from '../data/profile';

export function generateVCardString(): string {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Tambe;Ashu Elisabeth;;;',
    'FN:Ashu Elisabeth Tambe (MSN Lisa)',
    'NICKNAME:MSN Lisa',
    'TITLE:Medico-Surgical Nurse & Entrepreneur',
    'ORG:Healthcare Leadership & Creative Media',
    `TEL;TYPE=CELL,VOICE:${PROFILE_DATA.contact.phone}`,
    `EMAIL;TYPE=PREF,INTERNET:${PROFILE_DATA.contact.email}`,
    `URL;TYPE=LinkedIn:${PROFILE_DATA.socials.find(s => s.id === 'linkedin')?.url || ''}`,
    `URL;TYPE=Instagram:${PROFILE_DATA.socials.find(s => s.id === 'instagram')?.url || ''}`,
    `URL;TYPE=TikTok:${PROFILE_DATA.socials.find(s => s.id === 'tiktok')?.url || ''}`,
    `NOTE:MSN Lisa 🌸🩺 | Medico-surgical Nurse, Youth leader, Content creator, Entrepreneur. WhatsApp: ${PROFILE_DATA.contact.phone}`,
    'CATEGORIES:Healthcare,Nursing,Entrepreneurship,Content Creation',
    'END:VCARD',
  ].join('\r\n');

  return vcard;
}

export function downloadVCard(): void {
  const vcardData = generateVCardString();
  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Ashu_Elisabeth_Tambe_MSN_Lisa.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
