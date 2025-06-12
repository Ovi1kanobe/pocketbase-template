package migrations

import (
    "github.com/pocketbase/pocketbase/core"
    m "github.com/pocketbase/pocketbase/migrations"

	"pocketbase-template/utils"
)

func init() {
    m.Register(func(app core.App) error {
        settings := app.Settings()

        // for all available settings fields you could check
        // https://github.com/pocketbase/pocketbase/blob/develop/core/settings_model.go#L121-L130
        settings.Meta.AppName = utils.GoDotEnvVariable("PB_APP_NAME")
        settings.Meta.AppURL = utils.GoDotEnvVariable("PB_APP_URL")
        settings.Logs.MaxDays = 4
        settings.Logs.LogAuthId = true
        settings.Logs.LogIP = true
		smtpEnabled := utils.GoDotEnvVariable("PB_SMTP_ENABLED")
		if smtpEnabled == "true" {
			settings.SMTP.Enabled = true
			settings.SMTP.Username = utils.GoDotEnvVariable("PB_SMTP_USER")
			settings.SMTP.Password = utils.GoDotEnvVariable("PB_SMTP_PASS")
			settings.SMTP.Host = utils.GoDotEnvVariable("PB_SMTP_HOST")
			settings.Meta.SenderAddress = utils.GoDotEnvVariable("PB_SMTP_SENDER_ADDRESS")
			settings.Meta.SenderName = utils.GoDotEnvVariable("PB_SMTP_SENDER_NAME")
		}
		s3Enabled := utils.GoDotEnvVariable("PB_S3_ENABLED")
		if s3Enabled == "true" {
			settings.S3.Enabled = true
			settings.S3.Endpoint = utils.GoDotEnvVariable("PB_S3_ENDPOINT")
			settings.S3.AccessKey = utils.GoDotEnvVariable("PB_S3_ACCESS_KEY")
			settings.S3.Bucket = utils.GoDotEnvVariable("PB_S3_BUCKET")
			settings.S3.Region = utils.GoDotEnvVariable("PB_S3_REGION")
			settings.S3.Secret = utils.GoDotEnvVariable("PB_S3_SECRET")
		}

        return app.Save(settings)
    }, nil)
}