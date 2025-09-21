import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Search, 
  Bell, 
  Settings, 
  Plus,
  Heart,
  MessageSquare,
  Share2,
  UserPlus,
  Briefcase,
  Award,
  MapPin,
  Star
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('feed')

  // Mock data for demonstration
  const connections = [
    { id: 1, name: 'Kwame Asante', role: 'Electrical Engineer', location: 'Accra, Ghana', avatar: 'KA', verified: true },
    { id: 2, name: 'Amara Diallo', role: 'Plumber', location: 'Lagos, Nigeria', avatar: 'AD', verified: true },
    { id: 3, name: 'Thabo Mthembu', role: 'Carpenter', location: 'Cape Town, SA', avatar: 'TM', verified: false },
  ]

  const feedPosts = [
    {
      id: 1,
      author: 'Kwame Asante',
      avatar: 'KA',
      time: '2 hours ago',
      content: 'Just completed a major electrical installation project! Proud to have powered up a new community center in Accra. 💡⚡',
      likes: 24,
      comments: 8,
      achievement: 'Electrical Certification Level 3'
    },
    {
      id: 2,
      author: 'Amara Diallo',
      avatar: 'AD',
      time: '4 hours ago',
      content: 'Looking for advice on modern plumbing techniques for high-rise buildings. Any experienced professionals willing to share insights?',
      likes: 12,
      comments: 15,
      helpRequest: true
    }
  ]

  const channels = [
    { name: 'electrical-trade', members: 1247, active: true },
    { name: 'plumbing-pros', members: 892, active: false },
    { name: 'carpentry-corner', members: 1156, active: false },
    { name: 'freelancer-lounge', members: 2341, active: false },
    { name: 'ask-a-mentor', members: 3456, active: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-sidebar">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold afrivon-gradient bg-clip-text text-transparent">
                Afrivon Connect
              </h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search professionals, skills, or topics..." 
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
                <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="afrivon-card">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">John Doe</CardTitle>
                <CardDescription>Master Electrician</CardDescription>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Nairobi, Kenya</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Profile Views</span>
                    <span className="font-semibold">127</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Connections</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <Badge className="w-full justify-center bg-secondary">
                    <Award className="w-3 h-3 mr-1" />
                    TradeLink Pro
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="afrivon-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full afrivon-button-primary">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Find Connections
                </Button>
                <Button variant="outline" className="w-full">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Browse Jobs
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Upcoming Events
                </Button>
              </CardContent>
            </Card>

            {/* Community Channels */}
            <Card className="afrivon-card">
              <CardHeader>
                <CardTitle className="text-lg">Community Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {channels.map((channel, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                      channel.active ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">#{channel.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{channel.members}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="connections">Network</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="help">Help a Mate</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {/* Create Post */}
                <Card className="afrivon-card">
                  <CardContent className="pt-6">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Input 
                          placeholder="Share an achievement, ask for advice, or start a discussion..."
                          className="mb-3"
                        />
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Plus className="w-4 h-4 mr-1" />
                              Photo
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Award className="w-4 h-4 mr-1" />
                              Achievement
                            </Button>
                          </div>
                          <Button className="afrivon-button-primary">Share</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Feed Posts */}
                {feedPosts.map((post) => (
                  <Card key={post.id} className="afrivon-card">
                    <CardHeader>
                      <div className="flex items-start space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            {post.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{post.author}</h3>
                            <Badge variant="secondary" className="text-xs">Verified</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{post.time}</p>
                          {post.achievement && (
                            <Badge className="mt-2 bg-primary/10 text-primary">
                              <Award className="w-3 h-3 mr-1" />
                              {post.achievement}
                            </Badge>
                          )}
                          {post.helpRequest && (
                            <Badge className="mt-2 bg-orange-500/10 text-orange-500">
                              Help Request
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{post.content}</p>
                      <div className="flex items-center space-x-6 text-muted-foreground">
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="connections" className="space-y-6">
                <Card className="afrivon-card">
                  <CardHeader>
                    <CardTitle>Your Professional Network</CardTitle>
                    <CardDescription>Connect with skilled professionals in your field</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {connections.map((connection) => (
                      <div key={connection.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback className="bg-secondary text-secondary-foreground">
                              {connection.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{connection.name}</h3>
                              {connection.verified && (
                                <Badge variant="secondary" className="text-xs">Verified</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{connection.role}</p>
                            <div className="flex items-center space-x-1 mt-1">
                              <MapPin className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{connection.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Message
                          </Button>
                          <Button className="afrivon-button-secondary" size="sm">
                            <UserPlus className="w-4 h-4 mr-1" />
                            Connect
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="messages" className="space-y-6">
                <Card className="afrivon-card">
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Stay connected with your professional network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <MessageCircle className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
                      <p className="text-muted-foreground mb-4">Start a conversation with your connections</p>
                      <Button className="afrivon-button-primary">
                        <Plus className="w-4 h-4 mr-2" />
                        Start New Conversation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="help" className="space-y-6">
                <Card className="afrivon-card">
                  <CardHeader>
                    <CardTitle>Help a Mate</CardTitle>
                    <CardDescription>Ask for help or share your expertise with the community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full afrivon-button-primary">
                        <Plus className="w-4 h-4 mr-2" />
                        Ask for Help
                      </Button>
                      <div className="text-center py-8">
                        <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Community Support</h3>
                        <p className="text-muted-foreground">
                          Get help from verified professionals or share your expertise to earn reputation points
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Topics */}
            <Card className="afrivon-card">
              <CardHeader>
                <CardTitle className="text-lg">Trending Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">#SolarInstallation</span>
                    <Badge variant="outline" className="text-xs">Hot</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">#PlumbingTips</span>
                    <Badge variant="outline" className="text-xs">Rising</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">#CarpentrySkills</span>
                    <Badge variant="outline" className="text-xs">Popular</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="afrivon-card">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-sm">Electrical Safety Webinar</h4>
                  <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                  <p className="text-xs text-muted-foreground">Online Event</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-sm">Lagos Trade Meetup</h4>
                  <p className="text-xs text-muted-foreground">Friday, 6:00 PM</p>
                  <p className="text-xs text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </CardContent>
            </Card>

            {/* Gig Alerts */}
            <Card className="afrivon-card">
              <CardHeader>
                <CardTitle className="text-lg">Gig Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-sm text-primary">New Electrical Job</h4>
                  <p className="text-xs text-muted-foreground">Residential wiring project</p>
                  <p className="text-xs text-muted-foreground">Accra, Ghana</p>
                  <Button size="sm" className="mt-2 afrivon-button-primary">View Details</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

