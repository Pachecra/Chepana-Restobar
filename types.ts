import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  highlight?: boolean;
}

export interface OpeningHours {
  day: string;
  time: string;
}

export interface ServiceFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

// GenAI Types
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isMapResult?: boolean;
  mapUri?: string;
}