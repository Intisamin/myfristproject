-- MARKO P0.6: schema privado. Ejecutar en Postgres recién aprovisionado con cuenta autorizada.
-- No contiene datos de clientes ni permisos para publicar/gastar.
BEGIN;
CREATE TABLE IF NOT EXISTS marko_content (
 content_id text PRIMARY KEY,
 title text NOT NULL,
 source text NOT NULL,
 stage text NOT NULL DEFAULT 'REGISTERED' CHECK(stage IN ('REGISTERED','PLANNED','ARCHIVED')),
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS marko_asset (
 content_id text NOT NULL REFERENCES marko_content(content_id),
 asset_key text NOT NULL,
 kind text NOT NULL CHECK(kind IN ('COVER','BROLL','AVATAR','AUDIO','FINAL_MP4','OTHER')),
 source_sha256 text,
 drive_file_id text,
 status text NOT NULL DEFAULT 'OBSERVED_UNVERIFIED' CHECK(status IN ('OBSERVED_UNVERIFIED','ARCHIVED_VERIFIED')),
 created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(content_id,asset_key)
);
CREATE UNIQUE INDEX IF NOT EXISTS marko_drive_id_unique ON marko_asset(drive_file_id) WHERE drive_file_id IS NOT NULL;
CREATE TABLE IF NOT EXISTS marko_operation (
 operation_key text PRIMARY KEY,
 content_id text NOT NULL REFERENCES marko_content(content_id),
 type text NOT NULL,
 payload_sha256 text NOT NULL,
 receipt jsonb NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now()
);
-- Future approvals are separate, append-only, never inferred from publication history.
CREATE TABLE IF NOT EXISTS marko_approval_audit (
 approval_id uuid PRIMARY KEY,
 content_id text NOT NULL REFERENCES marko_content(content_id),
 approval_type text NOT NULL,
 scope jsonb NOT NULL,
 evidence_sha256 text NOT NULL,
 approved_at timestamptz NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now()
);
COMMIT;
