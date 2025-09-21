import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  FileText, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Download, 
  Share2, 
  Eye, 
  Edit3,
  Plus,
  Trash2,
  Upload,
  Palette,
  Zap,
  Target,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Building,
  Wrench,
  Hammer,
  Lightbulb,
  Settings,
  Save,
  RefreshCw,
  CheckCircle,
  Clock,
  Users,
  Globe
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('profile')
  const [profileProgress, setProfileProgress] = useState(35)
  const [selectedTemplate, setSelectedTemplate] = useState('professional')
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  // Profile state
  const [profile, setProfile] = useState({
    personalInfo: {
      fullName: 'Kwame Asante',
      email: 'kwame.asante@example.com',
      phone: '+233 24 123 4567',
      location: 'Accra, Ghana',
      profession: 'Master Electrician',
      summary: 'Experienced electrician with 8+ years in residential and commercial electrical installations, maintenance, and repairs.'
    },
    skills: ['Electrical Installation', 'Circuit Design', 'Safety Compliance', 'Troubleshooting', 'Solar Systems'],
    experience: [
      {
        id: 1,
        title: 'Senior Electrician',
        company: 'PowerTech Solutions',
        location: 'Accra, Ghana',
        duration: '2020 - Present',
        description: 'Lead electrical installations for commercial buildings and residential complexes.'
      },
      {
        id: 2,
        title: 'Electrician',
        company: 'Ghana Electric Company',
        location: 'Kumasi, Ghana',
        duration: '2016 - 2020',
        description: 'Performed electrical maintenance and repairs for residential customers.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Electrical Engineering Diploma',
        institution: 'Accra Technical University',
        year: '2016',
        grade: 'First Class'
      }
    ],
    certifications: [
      'Licensed Electrician - Ghana Standards Authority',
      'Solar Installation Certification',
      'Electrical Safety Certification'
    ]
  })

  const templates = [
    {
      id: 'professional',
      name: 'Professional',
      description: 'Clean and modern design for corporate roles',
      category: 'Business',
      preview: '📄'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Colorful design with African patterns',
      category: 'Creative',
      preview: '🎨'
    },
    {
      id: 'technical',
      name: 'Technical',
      description: 'Perfect for engineers and technicians',
      category: 'Technical',
      preview: '⚙️'
    },
    {
      id: 'tradesman',
      name: 'Tradesman',
      description: 'Designed for skilled tradespeople',
      category: 'Trade',
      preview: '🔧'
    },
    {
      id: 'african-heritage',
      name: 'African Heritage',
      description: 'Celebrates African culture and identity',
      category: 'Cultural',
      preview: '🌍'
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      description: 'Simple and elegant design',
      category: 'Simple',
      preview: '✨'
    }
  ]

  const documentTypes = [
    { id: 'cv', name: 'CV/Resume', icon: FileText, description: 'Professional curriculum vitae' },
    { id: 'proposal', name: 'Project Proposal', icon: Briefcase, description: 'Business project proposals' },
    { id: 'cover-letter', name: 'Cover Letter', icon: Edit3, description: 'Personalized cover letters' },
    { id: 'business-card', name: 'Business Card', icon: User, description: 'Digital business cards' },
    { id: 'certificate', name: 'Certificate', icon: Award, description: 'Achievement certificates' }
  ]

  const tradeSkills = [
    'Electrical Installation', 'Plumbing', 'Carpentry', 'Masonry', 'Welding',
    'HVAC Systems', 'Solar Installation', 'Circuit Design', 'Safety Compliance',
    'Project Management', 'Quality Control', 'Equipment Maintenance'
  ]

  useEffect(() => {
    // Calculate profile completion
    let completed = 0
    const total = 5
    
    if (profile.personalInfo.fullName && profile.personalInfo.email) completed++
    if (profile.personalInfo.summary) completed++
    if (profile.skills.length > 0) completed++
    if (profile.experience.length > 0) completed++
    if (profile.education.length > 0) completed++
    
    setProfileProgress((completed / total) * 100)
  }, [profile])

  const addSkill = (skill) => {
    if (!profile.skills.includes(skill)) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }))
    }
  }

  const removeSkill = (skillToRemove) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }))
  }

  return (
    <div className="min-h-screen bg-background african-pattern">
      {/* Header */}
      <header className="border-b border-border bg-sidebar/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 careerkit-gradient rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold careerkit-gradient bg-clip-text text-transparent">
                    CareerKit
                  </h1>
                  <p className="text-xs text-muted-foreground">Identity Forge</p>
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="hidden md:flex items-center space-x-3 ml-8">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 relative">
                    <svg className="w-12 h-12 progress-ring">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="#FFD700"
                        strokeWidth="4"
                        fill="transparent"
                        className="progress-ring-circle"
                        style={{
                          strokeDashoffset: 251.2 - (profileProgress / 100) * 251.2
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{Math.round(profileProgress)}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Profile Complete</p>
                    <p className="text-xs text-muted-foreground">Keep building your TradePass</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="hidden md:flex"
              >
                <Eye className="w-4 h-4 mr-2" />
                {isPreviewMode ? 'Edit' : 'Preview'}
              </Button>
              <Button className="careerkit-button-primary">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">KA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card className="careerkit-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full careerkit-button-primary justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  New Document
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Profile
                </Button>
              </CardContent>
            </Card>

            {/* Document Types */}
            <Card className="careerkit-card">
              <CardHeader>
                <CardTitle>Document Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {documentTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <type.icon className="w-5 h-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{type.name}</p>
                      <p className="text-xs text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="careerkit-card pulse-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  <span>AI Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm">💡 <strong>Tip:</strong> Add more technical skills to strengthen your profile for electrical jobs.</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Get Suggestions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="export">Export</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                {/* Personal Information */}
                <Card className="careerkit-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>Personal Information</span>
                    </CardTitle>
                    <CardDescription>Build your professional identity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input 
                          id="fullName" 
                          value={profile.personalInfo.fullName}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, fullName: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="profession">Profession</Label>
                        <Input 
                          id="profession" 
                          value={profile.personalInfo.profession}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, profession: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={profile.personalInfo.email}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, email: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          value={profile.personalInfo.phone}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, phone: e.target.value }
                          }))}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location" 
                          value={profile.personalInfo.location}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, location: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="summary">Professional Summary</Label>
                      <Textarea 
                        id="summary" 
                        rows={4}
                        value={profile.personalInfo.summary}
                        onChange={(e) => setProfile(prev => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, summary: e.target.value }
                        }))}
                        placeholder="Describe your professional experience and expertise..."
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card className="careerkit-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Wrench className="w-5 h-5" />
                      <span>Skills & Expertise</span>
                    </CardTitle>
                    <CardDescription>Showcase your technical abilities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <div key={index} className="skill-badge flex items-center space-x-2">
                          <span>{skill}</span>
                          <button 
                            onClick={() => removeSkill(skill)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div>
                      <Label>Add Skills</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tradeSkills.filter(skill => !profile.skills.includes(skill)).map((skill) => (
                          <Button
                            key={skill}
                            variant="outline"
                            size="sm"
                            onClick={() => addSkill(skill)}
                            className="text-xs"
                          >
                            <Plus className="w-3 h-3 mr-1" />
                            {skill}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Experience */}
                <Card className="careerkit-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Briefcase className="w-5 h-5" />
                      <span>Work Experience</span>
                    </CardTitle>
                    <CardDescription>Your professional journey</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profile.experience.map((exp) => (
                      <div key={exp.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                            <p className="text-sm text-muted-foreground flex items-center space-x-4">
                              <span className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{exp.location}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{exp.duration}</span>
                              </span>
                            </p>
                            <p className="mt-2 text-sm">{exp.description}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Experience
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="templates" className="space-y-6">
                <Card className="careerkit-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Palette className="w-5 h-5" />
                      <span>Template Gallery</span>
                    </CardTitle>
                    <CardDescription>Choose a design that represents you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {templates.map((template) => (
                        <div
                          key={template.id}
                          className={`template-card ${selectedTemplate === template.id ? 'border-primary' : ''}`}
                          onClick={() => setSelectedTemplate(template.id)}
                        >
                          <div className="text-center">
                            <div className="text-4xl mb-3">{template.preview}</div>
                            <h3 className="font-semibold text-lg">{template.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{template.description}</p>
                            <Badge variant="secondary" className="text-xs">
                              {template.category}
                            </Badge>
                          </div>
                          {selectedTemplate === template.id && (
                            <div className="absolute top-2 right-2">
                              <CheckCircle className="w-5 h-5 text-primary" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card className="careerkit-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>Document Preview</span>
                    </CardTitle>
                    <CardDescription>Real-time preview of your {selectedTemplate} template</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="document-canvas p-8 text-black">
                      {/* CV Preview */}
                      <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-6">
                          <h1 className="text-3xl font-bold text-gray-800 mb-2">{profile.personalInfo.fullName}</h1>
                          <p className="text-xl text-gray-600 mb-4">{profile.personalInfo.profession}</p>
                          <div className="flex justify-center space-x-6 text-sm text-gray-600">
                            <span className="flex items-center space-x-1">
                              <Mail className="w-4 h-4" />
                              <span>{profile.personalInfo.email}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Phone className="w-4 h-4" />
                              <span>{profile.personalInfo.phone}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{profile.personalInfo.location}</span>
                            </span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">Professional Summary</h2>
                          <p className="text-gray-700 leading-relaxed">{profile.personalInfo.summary}</p>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">Skills</h2>
                          <div className="flex flex-wrap gap-2">
                            {profile.skills.map((skill, index) => (
                              <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">Work Experience</h2>
                          {profile.experience.map((exp) => (
                            <div key={exp.id} className="mb-4">
                              <div className="flex justify-between items-start mb-1">
                                <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                                <span className="text-sm text-gray-600">{exp.duration}</span>
                              </div>
                              <p className="text-gray-700 font-medium">{exp.company} • {exp.location}</p>
                              <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">Education</h2>
                          {profile.education.map((edu) => (
                            <div key={edu.id} className="mb-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                                  <p className="text-gray-700">{edu.institution}</p>
                                </div>
                                <div className="text-right">
                                  <span className="text-sm text-gray-600">{edu.year}</span>
                                  <p className="text-sm text-gray-600">{edu.grade}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="export" className="space-y-6">
                <Card className="careerkit-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>Export & Share</span>
                    </CardTitle>
                    <CardDescription>Download your documents in various formats</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="careerkit-button-primary h-16 flex-col">
                        <FileText className="w-6 h-6 mb-2" />
                        <span>Download PDF</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex-col">
                        <Edit3 className="w-6 h-6 mb-2" />
                        <span>Download Word</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex-col">
                        <Globe className="w-6 h-6 mb-2" />
                        <span>LinkedIn Format</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex-col">
                        <Share2 className="w-6 h-6 mb-2" />
                        <span>Share Link</span>
                      </Button>
                    </div>
                    
                    <div className="border-t border-border pt-6">
                      <h3 className="font-semibold mb-4">Recent Exports</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-medium">CV_KwameAsante_Professional.pdf</p>
                              <p className="text-sm text-muted-foreground">Exported 2 hours ago</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="careerkit-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5" />
                      <span>Settings</span>
                    </CardTitle>
                    <CardDescription>Customize your CareerKit experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">AI Suggestions</p>
                            <p className="text-sm text-muted-foreground">Get smart content recommendations</p>
                          </div>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Auto-save</p>
                            <p className="text-sm text-muted-foreground">Automatically save your progress</p>
                          </div>
                          <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-6">
                      <h3 className="font-semibold mb-4">Data Management</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Upload className="w-4 h-4 mr-2" />
                          Import from LinkedIn
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Save className="w-4 h-4 mr-2" />
                          Export All Data
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Clear All Data
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
