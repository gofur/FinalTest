from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import Highlight


class HighlightSerializer(serializers.ModelSerializer):

    created_date = serializers.DateField(read_only=True)
    # campaign_id = CampaignSerializer()
    # campaign = serializers.ReadOnlyField(source='campaign.campaign_name')

    

    class Meta:
        model = Highlight
        fields = ('__all__')
        # fields = ('thanks_title', 'description', 'created_date', 'campaign')
        