"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Webhook, Check, X, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch";

const IntegrationsPage: React.FC = () => {
  const [integrations] = useState([
    {
      id: 1,
      name: "Slack",
      status: "connected",
      type: "Communication",
      lastSync: "2 hours ago",
    },
    {
      id: 2,
      name: "Salesforce",
      status: "pending",
      type: "CRM",
      lastSync: "Not synced",
    },
    {
      id: 3,
      name: "Google Sheets",
      status: "connected",
      type: "Spreadsheet",
      lastSync: "30 minutes ago",
    },
  ]);

  return (
    <div className="p-6 space-y-6 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <Card
            key={integration.id}
            className="hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <Webhook className="mr-2 text-rose-600" />
                {integration.name}
              </CardTitle>
              <div className="flex items-center space-x-2">
                {integration.status === "connected" ? (
                  <Check className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Type</span>
                  <span className="text-sm font-medium">
                    {integration.type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Last Sync
                  </span>
                  <span className="text-sm font-medium">
                    {integration.lastSync}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Auto Sync
                  </span>
                  <Switch />
                </div>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Sync Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IntegrationsPage;
