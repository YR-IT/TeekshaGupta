// helper/email.ts
import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  serviceId: 'service_50einl4',
  templateId: 'template_ub97ase', 
  publicKey: 'mb_h4gyIYHJZ2ZkpY',
};

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  subject: string;
  vision: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.publicKey);

    // Prepare template parameters
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      project_type: formData.projectType,
      subject: formData.subject,
      message: formData.vision,
      to_name: 'TAS Designs', // Replace with your company name
      reply_to: formData.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! We\'ll get back to you soon.',
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly.',
    };
  }
};