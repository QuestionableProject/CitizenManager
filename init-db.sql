CREATE DATABASE dashboadr1
WITH
    OWNER = postgres ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251' TABLESPACE = pg_default CONNECTION
LIMIT = -1 IS_TEMPLATE = False;

CREATE TABLE
    IF NOT EXISTS public.tablecitizens (id integer, tablecitizenId integer);

CREATE TABLE
    IF NOT EXISTS public.tablefamilies (id integer, tablecitizenId integer);

ALTER TABLE
    IF EXISTS public.tablecitizens
ADD
    CONSTRAINT tablecitizens_pkey PRIMARY KEY (id);

ALTER TABLE
    IF EXISTS public.tablefamilies
ADD
    CONSTRAINT tablefamilies_pkey PRIMARY KEY (id);

ALTER TABLE
    IF EXISTS public.tablefamilies
ADD
    CONSTRAINT "tablefamilies_tablecitizenId_fkey" FOREIGN KEY ("tablecitizenId") REFERENCES public.tablecitizens (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE
SET NULL;

CREATE SEQUENCE IF NOT EXISTS public.tablecitizens_id_seq INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 OWNED BY tablecitizens.id;

ALTER SEQUENCE public.tablecitizens_id_seq OWNER TO postgres;

CREATE SEQUENCE IF NOT EXISTS public.tablefamilies_id_seq INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 OWNED BY tablefamilies.id;

ALTER SEQUENCE public.tablefamilies_id_seq OWNER TO postgres;

CREATE TABLE
    IF NOT EXISTS public.tablecitizens (
        id integer NOT NULL DEFAULT nextval(
            'tablecitizens_id_seq':: regclass
        ),
        name character varying(255) COLLATE pg_catalog."default",
        surname character varying(255) COLLATE pg_catalog."default",
        patronymic character varying(255) COLLATE pg_catalog."default",
        birthday date,
        "сitizenship" character varying(255) COLLATE pg_catalog."default",
        "createdAt" timestamp
        with
            time zone DEFAULT now(),
            "updatedAt" timestamp
        with
            time zone DEFAULT now(),
            CONSTRAINT tablecitizens_pkey PRIMARY KEY (id)
    );

CREATE TABLE
    IF NOT EXISTS public.tablefamilies (
        id integer NOT NULL DEFAULT nextval(
            'tablefamilies_id_seq':: regclass
        ),
        name character varying(255) COLLATE pg_catalog."default",
        surname character varying(255) COLLATE pg_catalog."default",
        patronymic character varying(255) COLLATE pg_catalog."default",
        birthday date,
        parent character varying(255) COLLATE pg_catalog."default",
        "сitizenship" character varying(255) COLLATE pg_catalog."default",
        "createdAt" timestamp
        with
            time zone DEFAULT now(),
            "updatedAt" timestamp
        with
            time zone DEFAULT now(),
            "tablecitizenId" integer,
            CONSTRAINT tablefamilies_pkey PRIMARY KEY (id),
            CONSTRAINT "tablefamilies_tablecitizenId_fkey" FOREIGN KEY ("tablecitizenId") REFERENCES public.tablecitizens (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE
        SET NULL
    );