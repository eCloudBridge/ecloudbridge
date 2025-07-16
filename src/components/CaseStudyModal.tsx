
import { X, TrendingUp, Users, Clock, Star, Award, Target, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CaseStudy {
  id: number;
  logo: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { icon: any; value: string; label: string };
  detailedDescription?: string;
  technologies?: string[];
  timeline?: string;
  teamSize?: string;
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal = ({ caseStudy, isOpen, onClose }: CaseStudyModalProps) => {
  if (!caseStudy) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {caseStudy.company} Case Study
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header with logo and basic info */}
          <div className="flex items-start space-x-6">
            <img 
              src={caseStudy.logo} 
              alt={`${caseStudy.company} logo`}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{caseStudy.company}</h3>
              <span className="inline-block text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full mt-2">
                {caseStudy.industry}
              </span>
              {caseStudy.timeline && (
                <p className="text-gray-600 mt-2">Timeline: {caseStudy.timeline}</p>
              )}
              {caseStudy.teamSize && (
                <p className="text-gray-600">Team Size: {caseStudy.teamSize}</p>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <caseStudy.metrics.icon className="h-8 w-8 text-orange-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{caseStudy.metrics.value}</div>
                <div className="text-sm text-gray-600">{caseStudy.metrics.label}</div>
              </div>
            </div>
          </div>

          {/* Challenge Section */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-red-800 mb-3">Challenge</h4>
            <p className="text-red-700">{caseStudy.challenge}</p>
          </div>

          {/* Solution Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Solution</h4>
            <p className="text-blue-700">{caseStudy.solution}</p>
            {caseStudy.detailedDescription && (
              <p className="text-blue-700 mt-3">{caseStudy.detailedDescription}</p>
            )}
          </div>

          {/* Technologies Used */}
          {caseStudy.technologies && (
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-purple-800 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Results Section */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-800 mb-3">Results</h4>
            <ul className="space-y-2">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-center text-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
