import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '3va9ujsh', 
  dataset: 'production',
  apiVersion: '2024-02-25',
  useCdn: false,
})