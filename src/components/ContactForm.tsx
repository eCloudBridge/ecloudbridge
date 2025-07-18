
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // Load cached data on component mount
  useEffect(() => {
    const cachedData = localStorage.getItem('contactFormCache');
    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        setFormData(parsed);
      } catch (error) {
        console.error('Error loading cached form data:', error);
      }
    }
  }, []);

  // Cache form data whenever it changes
  useEffect(() => {
    if (formData.name || formData.email || formData.phone) {
      localStorage.setItem('contactFormCache', JSON.stringify(formData));
    }
  }, [formData]);

  const handleInputChange = (field: keyof ContactData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to email endpoint (you can replace this with your Zoho webhook)
      const emailData = {
        to: 'leads@ecloudbridge.com', // Replace with your email
        subject: `New Lead from ${formData.name}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Company: ${formData.company}
          Message: ${formData.message}
          
          Submitted at: ${new Date().toISOString()}
          From: ${window.location.origin}
        `
      };

      // For now, we'll log the data and show success
      // You can integrate with Zoho CRM API or email service here
      console.log('Lead data:', emailData);
      
      // Clear the cache after successful submission
      localStorage.removeItem('contactFormCache');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

      toast({
        title: "Thank you for your interest!",
        description: "We'll get back to you within 24 hours.",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full"
            placeholder="your@email.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full"
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <Textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={4}
          className="w-full"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3"
      >
        {isSubmitting ? 'Submitting...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
