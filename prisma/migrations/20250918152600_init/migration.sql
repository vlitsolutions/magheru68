-- CreateTable
CREATE TABLE "public"."redirect_analytics" (
    "id" SERIAL NOT NULL,
    "page" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_agent" TEXT,
    "ip_address" TEXT,

    CONSTRAINT "redirect_analytics_pkey" PRIMARY KEY ("id")
);
