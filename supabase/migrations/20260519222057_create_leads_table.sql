/*
  # Create leads table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, required)
      - `email` (text, optional)
      - `service` (text, optional) - which service they're interested in
      - `message` (text, optional)
      - `source_page` (text) - which page the form was submitted from
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `leads` table
    - Allow anonymous inserts (public lead capture form)
    - No read access for anon users (leads are private business data)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  email text DEFAULT '',
  service text DEFAULT '',
  message text DEFAULT '',
  source_page text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
