# -*- coding: utf-8 -*-
import scrapy
from tutorial.items import NBAItem


class NBASpider(scrapy.Spider):
    name = "nba"
    allowed_domains = ["nba.hupu.com"]
    start_urls = ['https://nba.hupu.com/stats/players']

    def parse(self, response):
        players = response.css('.players_table tr')
        for (index, player) in enumerate(players):

            if index == 0:
                continue
            else:
                item = NBAItem()
                item['name'] = player.xpath('td[2]/a/text()').extract_first()
                item['rank'] = player.xpath('td[1]/text()').extract_first()
                item['score'] = player.xpath('td[4]/text()').extract_first()
                item['threeRate'] = player.xpath('td[8]/text()').extract_first()
                item['hitRate'] = player.xpath('td[6]/text()').extract_first()
                item['freeRate'] = player.xpath('td[10]/text()').extract_first()
                yield item
        next = response.css('.pages_box .page_num + a::attr("href")').extract_first()
        url = response.urljoin(next)
        yield scrapy.Request(url=url, callback=self.parse)
