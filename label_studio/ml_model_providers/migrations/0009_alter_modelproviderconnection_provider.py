# Generated by Django 5.1.5 on 2025-02-07 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("ml_model_providers", "0008_alter_modelproviderconnection_provider"),
    ]

    operations = [
        migrations.AlterField(
            model_name="modelproviderconnection",
            name="provider",
            field=models.CharField(
                choices=[
                    ("OpenAI", "OpenAI"),
                    ("AzureOpenAI", "AzureOpenAI"),
                    ("AzureAIFoundry", "AzureAIFoundry"),
                    ("VertexAI", "VertexAI"),
                    ("Gemini", "Gemini"),
                    ("Anthropic", "Anthropic"),
                    ("Custom", "Custom"),
                ],
                default="OpenAI",
                max_length=255,
            ),
        ),
    ]
