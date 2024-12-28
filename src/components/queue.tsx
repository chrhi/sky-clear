"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Trash2, Edit } from "lucide-react";

const QueueComponent = () => {
  // Mock data - replace with real data from your API
  const [queuedPosts] = useState([
    {
      id: 1,
      content:
        "Excited to announce our latest feature release! #technology #innovation",
      scheduledFor: "2024-12-29T10:00:00",
      status: "scheduled",
    },
    {
      id: 2,
      content: "Join us for an upcoming webinar on modern web development!",
      scheduledFor: "2024-12-30T15:30:00",
      status: "scheduled",
    },
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Upcoming Posts</span>
            <span className="text-sm text-muted-foreground">
              {queuedPosts.length} scheduled
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {queuedPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 space-y-2">
                  <p className="text-sm">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {new Date(post.scheduledFor).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {new Date(post.scheduledFor).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {queuedPosts.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No posts scheduled</p>
              <p className="text-sm">Create a new post to get started</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QueueComponent;
