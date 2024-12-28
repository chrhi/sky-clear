"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MyPosts = () => {
  // Mock data - replace with actual data from your API
  const [posts] = useState([
    {
      id: 1,
      content: "Just launched our new product! Check it out 🚀",
      postedAt: "2024-12-27T10:00:00",
      status: "posted",
      engagement: { likes: 42, reposts: 12 },
    },
    {
      id: 2,
      content: "Exciting updates coming soon! Stay tuned!",
      postedAt: "2024-12-26T15:30:00",
      status: "posted",
      engagement: { likes: 31, reposts: 8 },
    },
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Posts</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Posts</SelectItem>
              <SelectItem value="posted">Posted</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Post History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <p className="text-sm">{post.content}</p>
                  <Badge
                    variant={post.status === "posted" ? "default" : "secondary"}
                  >
                    {post.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    {new Date(post.postedAt).toLocaleString()}
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{post.engagement.likes} likes</span>
                    <span>{post.engagement.reposts} reposts</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No posts yet</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export { MyPosts };
