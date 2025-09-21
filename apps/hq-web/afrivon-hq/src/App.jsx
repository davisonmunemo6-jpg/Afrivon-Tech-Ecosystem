import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Search, 
  Bell, 
  Settings, 
  Shield,
  Database,
  FileText,
  MessageSquare,
  UserCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Filter,
  Calendar,
  Globe,
  Lock,
  Activity
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  // Mock data for demonstration
  const metrics = [
    { title: 'Total Users', value: '12,847', change: '+12%', icon: Users, color: 'text-blue-400' },
    { title: 'Monthly Revenue', value: '$45,230', change: '+8%', icon: DollarSign, color: 'text-green-400' },
    { title: 'Active Jobs', value: '1,234', change: '+15%', icon: TrendingUp, color: 'text-yellow-400' },
    { title: 'Support Tickets', value: '89', change: '-5%', icon: MessageSquare, color: 'text-red-400' },
  ]

  const recentUsers = [
    { id: 1, name: 'Kwame Asante', email: 'kwame@example.com', status: 'active', joinDate: '2024-09-20' },
    { id: 2, name: 'Amara Diallo', email: 'amara@example.com', status: 'pending', joinDate: '2024-09-19' },
    { id: 3, name: 'Thabo Mthembu', email: 'thabo@example.com', status: 'suspended', joinDate: '2024-09-18' },
  ]

  const supportTickets = [
    { id: 1, user: 'John Doe', subject: 'Payment Issue', priority: 'high', status: 'open' },
    { id: 2, user: 'Jane Smith', subject: 'Profile Update', priority: 'medium', status: 'in-progress' },
    { id: 3, user: 'Mike Johnson', subject: 'Feature Request', priority: 'low', status: 'closed' },
  ]

  const partnerships = [
    { id: 1, company: 'TechCorp Ltd', tier: 'Premium', revenue: '$12,500', status: 'active' },
    { id: 2, company: 'BuildMaster Inc', tier: 'Standard', revenue: '$5,200', status: 'pending' },
    { id: 3, company: 'ElectroTools', tier: 'Basic', revenue: '$1,800', status: 'active' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-sidebar">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-primary" />
                <h1 className="text-2xl font-bold afrivon-gradient bg-clip-text text-transparent">
                  Afrivon HQ
                </h1>
                <Badge variant="destructive" className="text-xs">ADMIN</Badge>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search users, tickets, or data..." 
                  className="pl-10 w-80 bg-input border-border"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Metrics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{metric.title}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {metric.change} from last month
                      </p>
                    </div>
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="afrivon-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New user registration</p>
                      <p className="text-xs text-muted-foreground">Kwame Asante joined TradeLink</p>
                    </div>
                    <span className="text-xs text-muted-foreground">2m ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Partnership approved</p>
                      <p className="text-xs text-muted-foreground">TechCorp Ltd upgraded to Premium</p>
                    </div>
                    <span className="text-xs text-muted-foreground">15m ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Support ticket resolved</p>
                      <p className="text-xs text-muted-foreground">Payment issue for John Doe</p>
                    </div>
                    <span className="text-xs text-muted-foreground">1h ago</span>
                  </div>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card className="afrivon-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5" />
                    <span>System Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Database</span>
                    </div>
                    <Badge className="bg-green-500/10 text-green-400">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">API Services</span>
                    </div>
                    <Badge className="bg-green-500/10 text-green-400">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      <span className="font-medium">Payment Gateway</span>
                    </div>
                    <Badge className="bg-yellow-500/10 text-yellow-400">Degraded</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="afrivon-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage user accounts and permissions</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-xs text-muted-foreground">Joined: {user.joinDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          className={
                            user.status === 'active' ? 'bg-green-500/10 text-green-400' :
                            user.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400' :
                            'bg-red-500/10 text-red-400'
                          }
                        >
                          {user.status}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="afrivon-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5" />
                    <span>Revenue Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>Subscription Revenue</span>
                      <span className="font-bold text-green-400">$32,450</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>Commission Revenue</span>
                      <span className="font-bold text-blue-400">$8,920</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>Partnership Revenue</span>
                      <span className="font-bold text-yellow-400">$3,860</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="afrivon-card">
                <CardHeader>
                  <CardTitle>Pending Payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Mentor Payments</p>
                        <p className="text-sm text-muted-foreground">15 pending</p>
                      </div>
                      <span className="font-bold">$2,340</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Partner Commissions</p>
                        <p className="text-sm text-muted-foreground">8 pending</p>
                      </div>
                      <span className="font-bold">$1,890</span>
                    </div>
                    <Button className="w-full afrivon-button-primary mt-4">
                      Process All Payouts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <Card className="afrivon-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Support Tickets</CardTitle>
                    <CardDescription>Manage user support requests</CardDescription>
                  </div>
                  <Button className="afrivon-button-primary">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    New Ticket
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div key={ticket.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          ticket.priority === 'high' ? 'bg-red-400' :
                          ticket.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                        }`}></div>
                        <div>
                          <h3 className="font-semibold">{ticket.subject}</h3>
                          <p className="text-sm text-muted-foreground">From: {ticket.user}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          className={
                            ticket.status === 'open' ? 'bg-red-500/10 text-red-400' :
                            ticket.status === 'in-progress' ? 'bg-yellow-500/10 text-yellow-400' :
                            'bg-green-500/10 text-green-400'
                          }
                        >
                          {ticket.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partnerships" className="space-y-6">
            <Card className="afrivon-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Partnership Portal</CardTitle>
                    <CardDescription>Manage commercial partnerships and sponsorships</CardDescription>
                  </div>
                  <Button className="afrivon-button-primary">
                    <Upload className="w-4 h-4 mr-2" />
                    Add Partner
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partnerships.map((partner) => (
                    <div key={partner.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {partner.company.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{partner.company}</h3>
                          <p className="text-sm text-muted-foreground">Tier: {partner.tier}</p>
                          <p className="text-sm font-medium text-green-400">{partner.revenue}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          className={
                            partner.status === 'active' ? 'bg-green-500/10 text-green-400' :
                            'bg-yellow-500/10 text-yellow-400'
                          }
                        >
                          {partner.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card className="afrivon-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Content Management</CardTitle>
                    <CardDescription>Manage blog posts, announcements, and dynamic content</CardDescription>
                  </div>
                  <Button className="afrivon-button-primary">
                    <FileText className="w-4 h-4 mr-2" />
                    New Post
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold mb-2">Blog Posts</h3>
                    <p className="text-2xl font-bold text-primary">24</p>
                    <p className="text-sm text-muted-foreground">Published this month</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold mb-2">Announcements</h3>
                    <p className="text-2xl font-bold text-secondary">8</p>
                    <p className="text-sm text-muted-foreground">Active announcements</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-semibold mb-2">Scheduled</h3>
                    <p className="text-2xl font-bold text-yellow-400">12</p>
                    <p className="text-sm text-muted-foreground">Pending publication</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
