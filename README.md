# Wordpress Documentation For Qualy's Developer

## Very Important thing for WordPress Site Deployment

```
Production（本番） -> no index is unchecked
Test（テスト） → check that no index is checked
Don't forget to check the mail setting
```
![deploy-important](https://github.com/Qualy-Inc/wordpress-documentation/assets/118871892/05b6cf2d-b00d-42f1-8c92-218261cea2b7)

## Wordpress Theme Generator

- https://underscores.me/

## Wordpress Manual By PhuPhuWai

- https://docs.google.com/presentation/d/1K3EppHGevDJWSKSWgTL0F8f475yq7dKfpZFXB88d1Ps/

## MW WP Form plugin and its usage

> to create a mw wp form


> https://docs.google.com/presentation/d/1FugfKrtmWxt1PE3oDB5YDbobj43Ewf7npvVZuZmZWu4/


```

1.  Download and activate the 「　MW WP Form Plugin　」.
2.  The plugin will be displayed at 「　the right sidebar　」 after installation.
3.  Then click this => MW WP form
4.  Create a form name that you want to name like 「　お問い合わせ　」
5.  Basically MW WP form is linked with page.php
6.  Add this code => <?php the_content(); ?> to your page.php
7.  Then go back to your dashboard => MW WP Form => お問い合わせ
8.  Add the contact form design codes to [テキスト] (MW WP Form => お問い合わせ => テキスト)
9.  Then replace your custom input codes to mwwp form codes
10. Click this to  replace your custom codes => 「選択してください」（u can add everything you want to add name or
    something like that）
11. Then click this 「フォームタグを追加」to add class,id,placeholder　etc...
12. And add submit button,back button and confirm button at the bottom of the end.


```

## PageNavi plugin for pagination and its usage

```
=>##In wordpress dashboard
1. WP-PageNavi plugin ကို install လုပ်ရပါမယ်
2. ပီးရင် pagination setting ချဖို့အတွက် setting => PageNavi ကိုသွားရပါမယ်
3. PageNaVi settings form မှာ ကိုယ်လိုချင်တဲ့အတိုင်း form ဖြည့်ပီး setting ချပေးရပါမယ်
4. ->first page text မှာက pagination ရဲ့ ပထမဆုံးမှာ  ကိုယ်ပေါ် စေချင်တဲ့ text (or) number ကိုဖြည့်ရပါမယ်
   (eg. 1 ဖြည့်ရင် (1,2,3,..)ပေါ် ပါမယ်)
   ->last page text မှာက pagination ရဲ့ နောက်ဆုံးမှာ  ကိုယ်ပေါ် စေချင်တဲ့ text (or) number ကိုဖြည့်ရပါမယ်
   ->text for previous page က previous page ကိုသွားတဲ့ link ဖြစ်တဲ့အတွက် ကိုယ်ပေါ် စေချင်တဲ့ text (or) design(eg.<,<<,<=,...) ကိုဖြည့်ရပါမယ် (##can customize design in css )
   ->text for next page က next page ကိုသွားတဲ့ link ဖြစ်တဲ့အတွက် ကိုယ်ပေါ် စေချင်တဲ့ text (or) design(eg.>,>>,=>,...) ကိုဖြည့်ရပါမယ် (##can customize design in css )
   ->"Previous..." text and "Next..." text မှာက "..." ကိုဖြည့် ရပါမယ် အကယ်လို့ "..." ကိုမပေါ် စေချင်ရင် မဖြည့်လည်းရပါတယ်
   ->number of pages to display မှာက ကိုယ်ပေါ် စေချင်တဲ့ paginatioin pages အရေအတွက် ကို ဖြည့်ရပါမယ်
5. PageNavi setting ကို customize လုပ်ပီးရင် save changes ကိုနှိပ်ပါ

=>##In Coding
->pagination ကို ပေါ် စေချင်တဲ့နေရာမှာ အောက်က code ကိုထည့်‌ရေးပေးရပါမယ်
 <?php wp_pagenavi(); ?>

```

## WordPress install ပြီးနောက် လိုအပ်သော plugin များ

After installing wordpress plugin , you need to activate .

1. All-in-One WP Migration >> allows you to make changes to your database during the export process.
2. All-in-One WP Migration Unlimited Extension >> ☆ extension zip file ထည့်ရန် .
   ( you need to click "update now" to get unlimited version after installation .)
3. Classic editor >> to create pages and posts for your website.
4. Smart Custom Field >> you can add text fields as well as textarea, date / time picker, color picker, select, radio, checkbox.
   ☆. Advanced Custom Fields >> allows you to add extra content fields to your WordPress edit screens.It is more flexibile for working with custom fields.
5. custom post type >> ☆ if you want to add additional functionality to your site but don't want to add everything as a standard post.
   Moreover, with this plugin you can make many advanced CMS features simple and accessible to everyone.
6. intuitive-custom-post-order >> ☆ can sort categories by dragging.
   setting > intuitive CPO > (choose category).
7. WP-PageNavi >> for pagination
8. Show Current Template >> to show the page where you're.
9. MW WP Form >> to create form
10. Custom Post Type UI >> to create custom posts
11. All in One SEO >> to improve your website SEO (search engine optimization).
12. Duplicate Post >> to duplicate post in custom post type

## Wordpress Page Template Creation

```
    ****** Page Creation ပိုင်းအတွက် Visual Studio Code တွင်လုပ်ရမည့် အချက်အလက်များ ******

    1.  project မှာ page အခွဲတွေပါတဲ့ အခြေအနေမျိုးဆိုရင် page template ကို create လုပ်ရတယ်။
    2.  project file မှာ page-example.php (eg:page-about.php) file ဆောက်ရမယ်။
    3.  project file ရဲ့ header section မှာ template name ကို project file ရဲ့ name ကိုရေးပေးရမယ်။
            eg. project file name == 'page-about.php' ဖြစ်လျှင် template name ကို page- နဲ့ .php ကြားထဲကမိမိပေးထားတဲ့
                page name နဲ့တူအောင် ရေးပေးရပါမယ်။
                <?php
                    /*
                        template name:about
                    */
                    header();
                ?>


    ****** Page Creation ပိုင်းအတွက် WordPress Dashboard တွင်လုပ်ရမည့် အချက်အလက်များ ******

    1.  click "pages" "固定ページ" >
    2.  click "Add new" "新規追加" >
    3.  click "Add title" "タイトルを追加" > * Can be named any language
    4.  press Enter key > Enter Key နှိပ်လိုက်သည်နှင့်တပြိုင်နက် Add title box အောက်နားကပ်လျှက်နေရာတွင် permalink ကို တွေ့ရပါမယ်။
    5.  edit "permalink" "パーマリンク"　> အဲဒီ permalink ကို မိမိလိုချင်သည့် link name ပြောင်းပေးရပါမယ်။
                                            * link name သည် English Text only ဖြစ်ရပါမည်။

    6.  choose "template" "テンプレート" > page attribute "ページ属性" ရဲ့ template ကို visual studio code မှာ
                                            မိမိ project file မှာ ပေးခဲ့တဲ့ template name ကိုရွေးပေးရမယ်။
                                                eg: page-about.php အတွက် wordpress dashboard မှာ page creation ပြုလုပ်နေလျှင်
                                                    page attribute ရဲ့ template မှာ visual studio code ဘက်မှာ ထည့်ထားခဲ့တဲ့ template name ဖြစ်တဲ့ about ကို ရွေးပေးရမယ်။

    7.  အခြား လိုအပ်သည်များကို project အလိုက်ချိန်ညှိပေးရပါမယ်။ (eg: page attritube > parent , Featured image & etc)
    8.  publish　"公開" နှိပ်လိုက်သည်နှင့်တပြိုင်နက် new page creation ပြီးဆုံးပါပြီ။
        လိုအပ်လျှင် ထပ်မံပြင်ဆင်နိုင်ပါသည်။ ထပ်မံပြင်ဆင်ပြီးစီးချိန်တွင် update button "更新" ကိုနှိပ်ရန်သတိပြုရပါမည်။
```

## Utility Functions

### Japanese Text Trim

```php
$maxCharacters = 5; // Maximum number of characters to keep
// Trim the text
$trimmedText = mb_substr($text, 0, $maxCharacters, 'UTF-8');
```

### Wordpress Auto Remove p tag

If you see empty p tag in your wordpress site, you can use this code in functions.php file.

```php
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'widget_text_content', 'wpautop' );
```

### How To Get Parent Categories And Child Categories

```php
<?php
//get only parents
                $args = array('orderby' => 'name','order' => 'ASC','parent' => 0);
                $Parent_categories = get_categories($args);

                foreach($Parent_categories as $category) {
                  echo '<ul class="cate-txt"><li><a href="'.get_category_link( $category->term_id ).'">'.$category->name.'</a></li></ul>';
```

```php
 //get all children of this category
                  $args = array('orderby' => 'name','order' => 'ASC','parent' => $category->term_id);
                  $Child_categories = get_categories($args);
                  foreach ($Child_categories as $c){
                    echo '<ul class="cate-sub-txt"><li><a href="'.get_category_link( $c->term_id ).'">'.$c->name.'</a></li></ul> ';
                  }
                  echo '</p>';
                }
                ?>
```

### How to set the default image is the first image

```php
<div class="voice_img">
    <?php
    $images = SCF::get('voice_img_gp');
    if (!empty($images)) {
        $fields = $images[0];
        $voice_image = wp_get_attachment_image_src($fields['voice_img'], 'full');
        $default_image = $voice_image[0];
    ?>
        <img src="<?php echo $default_image; ?>" alt="" />
    <?php } ?>
</div>
```

## WordPress Search

```
    1. search ပြုလုပ်လိုသည့် project file တွင်အောက်ပါ code ကိုထည့်ရေးပေးပါ။
        <?php get_search_form(); ?>

    2. searchform.php အမည်ဖြင့် project file တခုကို create ပြီး form create ပါ။

        <form action="<?php echo home_url('/'); ?>" method="get" role="search">
            <input type="search" placeholder="" value="<?php echo get_search_query(); ?>" name="s" title="Search" />
                <button type="submit"></button>
        </form>

        - ဤ file တွင် form ရဲ့ UI ကိုပြင်ဆင်နိုင်ပါတယ်။
        - form ရဲ့ input type သည် search ဖြစ်လျှင် တခါတရံ safari browser တွင် အလုပ်မလုပ်သောကြောင့်
          input type ကို text ပြောင်းထားရသည့် အခြေအနေမျိုးလည်းရှိနိုင်ပါသည်။

    3. search.php ကို အလုပ်လုပ်ပေးပါလိမ့်မည်။ လိုအပ်သည့်အရာများကို ပြင်ဆင်နိုင်ပါသည်။
```


## Smart Custom Field

### Smart Custom field  ကို ကိုယ်ထည့်ချင်တဲ့ Field (eg. text, image, radio button, check box, code editor etc.) တွေကို ကိုယ်ထည့်ချင်တဲ့ page သို့မဟုတ် post တွေမှာ ထည့်ပြီးအသုံးပြုလို့ရပါတယ်။

အရင်ဆုံး Smart Custom Fields plugin ကို install လုပ်ပြီး activate လုပ်ပါ။
ထိုအခါ wordpress dashbord ရဲ left panel မှာ Smart Custom Fields ဆိုပြီး Field တစ်ခုပေါ်လာပါမည်။
- Documentation for Smart Custom Field
https://wordpress.org/plugins/smart-custom-fields/

![smf1](https://github.com/Qualy-Inc/wordpress-documentation/blob/main/images/amf1.png)

- Adding not loopig custom field

![smf2](https://github.com/Qualy-Inc/wordpress-documentation/blob/main/images/amf2.png)

- Adding loopig custom field (also called grouping)

![smf3](https://github.com/Qualy-Inc/wordpress-documentation/blob/main/images/amf3.png)

/* Safari Only */
_::-webkit-full-page-media,
_:future, :root h1 {
	color: red;
}


## MWWP Form Reference Sites
### Multiple Admins Mails
- https://www.wantedly.com/companies/commude/post_articles/413959
### Select Box
- https://arts-factory.net/mwwpformselect/
