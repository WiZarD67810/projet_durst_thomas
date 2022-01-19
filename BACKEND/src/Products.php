<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Products
 *
 * @ORM\Table(name="products")
 * @ORM\Entity
 */
class Products
{
    /**
     * @var int
     *
     * @ORM\Column(name="ID_Produit", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idProduit;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Reference", type="string", length=20, nullable=true)
     */
    private $reference;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Intitule", type="string", length=72, nullable=true)
     */
    private $intitule;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Resume", type="string", length=124, nullable=true)
     */
    private $resume;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Prix", type="decimal", precision=6, scale=2, nullable=true)
     */
    private $prix;

    /**
     * @var string|null
     *
     * @ORM\Column(name="CheminImage", type="string", length=81, nullable=true)
     */
    private $cheminimage;

    /**
     * @var int|null
     *
     * @ORM\Column(name="Note", type="integer", nullable=true)
     */
    private $note;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Type", type="string", length=15, nullable=true)
     */
    private $type;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Etat", type="string", length=16, nullable=true)
     */
    private $etat;


    /**
     * Get idProduit.
     *
     * @return int
     */
    public function getIdProduit()
    {
        return $this->idProduit;
    }

    /**
     * Set reference.
     *
     * @param string|null $reference
     *
     * @return Products
     */
    public function setReference($reference = null)
    {
        $this->reference = $reference;

        return $this;
    }

    /**
     * Get reference.
     *
     * @return string|null
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * Set intitule.
     *
     * @param string|null $intitule
     *
     * @return Products
     */
    public function setIntitule($intitule = null)
    {
        $this->intitule = $intitule;

        return $this;
    }

    /**
     * Get intitule.
     *
     * @return string|null
     */
    public function getIntitule()
    {
        return $this->intitule;
    }

    /**
     * Set resume.
     *
     * @param string|null $resume
     *
     * @return Products
     */
    public function setResume($resume = null)
    {
        $this->resume = $resume;

        return $this;
    }

    /**
     * Get resume.
     *
     * @return string|null
     */
    public function getResume()
    {
        return $this->resume;
    }

    /**
     * Set prix.
     *
     * @param string|null $prix
     *
     * @return Products
     */
    public function setPrix($prix = null)
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get prix.
     *
     * @return string|null
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set cheminimage.
     *
     * @param string|null $cheminimage
     *
     * @return Products
     */
    public function setCheminimage($cheminimage = null)
    {
        $this->cheminimage = $cheminimage;

        return $this;
    }

    /**
     * Get cheminimage.
     *
     * @return string|null
     */
    public function getCheminimage()
    {
        return $this->cheminimage;
    }

    /**
     * Set note.
     *
     * @param int|null $note
     *
     * @return Products
     */
    public function setNote($note = null)
    {
        $this->note = $note;

        return $this;
    }

    /**
     * Get note.
     *
     * @return int|null
     */
    public function getNote()
    {
        return $this->note;
    }

    /**
     * Set type.
     *
     * @param string|null $type
     *
     * @return Products
     */
    public function setType($type = null)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type.
     *
     * @return string|null
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set etat.
     *
     * @param string|null $etat
     *
     * @return Products
     */
    public function setEtat($etat = null)
    {
        $this->etat = $etat;

        return $this;
    }

    /**
     * Get etat.
     *
     * @return string|null
     */
    public function getEtat()
    {
        return $this->etat;
    }
}
